import { Program as ProgramBase, asyncFuncSpy } from "../platformize-framework/src";
import { GalaceanStatsInfo } from "./Stats/GalaceanStats";

export class WechatGameProgram extends ProgramBase {
  public static async main(process?: IProcess | undefined) {
    console.log('Hello Galacean!');
    if (!process) {
      return 1;
    }

    const stats = WechatGameProgram.stats = {} as GalaceanStatsInfo;

    const performance = window.performance;

    const ts_engineInit = performance.now();

    // 创建引擎
    let engine = undefined;
    if (process.createEngine) {
      engine = await asyncFuncSpy.call(this, process.createEngine, "createEngine");
    }

    stats.ts_engineInit = performance.now() - ts_engineInit;

    // 工程加载开始时间
    const ts_projectLoad = performance.now();

    // 加载资源
    let resources = undefined;
    if (process.loadResources) {
      resources = await asyncFuncSpy.call(this, process.loadResources, engine, "loadResources");
    }
    stats.ts_projectLoad = performance.now() - ts_projectLoad;

    // 首屏渲染开始时间
    const ts_firstScreenPaint = performance.now();

    // 资源加载完成
    process.onResourceLoaded && await asyncFuncSpy.call(this, process.onResourceLoaded, resources, "resourceLoaded");

    // 执行业务逻辑
    process.start && await asyncFuncSpy.call(this, process.start, engine, "start");
    stats.ts_firstScreenPaint = performance.now() - ts_firstScreenPaint;

    stats.ts_firstContentfulPaint = performance.now() - ts_engineInit;

    return 0;
  }

  public static async uploadStats() {
    const wxGame = wx as unknown as WechatMinigame.Wx;
    const fs = wxGame.getFileSystemManager();
    if (!fs) {
      console.error('getFileSystemManager failed');
      return 1;
    }

    await fs.writeFile({
      filePath: `${wx.env.USER_DATA_PATH}/stats.json`,
      data: JSON.stringify(WechatGameProgram.stats),
      encoding: 'utf8',
      success(res) {
        console.log(res);
        console.log('cache stats success: ' + `${wx.env.USER_DATA_PATH}/stats.json`);
      },
      fail() {
        console.error('write stats failed');
      },
    });

    return 0;
  }
}
