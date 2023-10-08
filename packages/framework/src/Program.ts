import { IProcess } from "./workflow";
import { GalaceanStatsInfo } from "./Stats/GalaceanStats";

async function asyncCaller(this: any, fn: Function, ...args: any[]) {
  if (fn) {
    let len = args.length;
    if (len > 0 && args[len-1] === 'string') {
      args.pop();
    }
    const result = await fn.apply(this, args);
    return result;
  }
}

export class Program {
  /**
   * stats
   * @description 统计数据
   */
  public static stats: GalaceanStatsInfo = {};

  /**
   * main
   * @description 程序入口
   */
  public static async main(process?: IProcess): Promise<number> {
    console.log('Hello Galacean!');
    if (!process) {
      return 1;
    }

    const performance = window.performance;

    const ts_firstContentfulPaint = performance.now();
    const ts_projectLoad = performance.now();

    process.loadResources && await asyncCaller(process.loadResources);
    Program.stats.ts_projectLoad = performance.now() - ts_projectLoad;
    console.log(`项目加载耗时:${Program.stats.ts_projectLoad}`);

    process.onResourceLoaded && await asyncCaller(process.onResourceLoaded);

    process.start && await asyncCaller(process.start);
    Program.stats.ts_firstContentfulPaint = performance.now() - ts_firstContentfulPaint;
    console.log(`首屏渲染耗时:${Program.stats.ts_firstContentfulPaint}`);

    return 0;
  }

  /**
   * uploadStats
   * @description 上传统计数据
   * @returns 
   */
  public static async uploadStats(): Promise<number> {
    console.log(Program.stats);
    return 0;
  }
}
