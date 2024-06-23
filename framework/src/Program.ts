import { IProcess } from "./workflow";
import { IStats } from "./stats";

async function asyncFuncSpy(this: any, fn: Function, ...args: any[]) {
  if (fn) {
    let len = args.length;
    if (len > 0 && args[len-1] === 'string') {
      args.pop();
    }
    const result = await fn.apply(this, args);
    return result;
  }
}

class Program {
  /**
   * stats
   * @description 统计数据
   */
  public static stats: IStats;

  /**
   * main
   * @description 程序入口
   */
  public static async main(process?: IProcess): Promise<number> {
    console.log("Hello World!");
    if (!process) {
      return 1;
    }

    // todo: coding here...

    return 0;
  }

  /**
   * uploadStats
   * @description 上传统计数据
   * @returns 
   */
  public static async uploadStats(): Promise<number> {
    console.log(`test uploadStats:${Program.stats}`);
    return 0;
  }
}

export { Program, asyncFuncSpy };
