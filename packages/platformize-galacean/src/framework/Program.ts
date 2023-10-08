import { Program as ProgramBase, asyncFuncSpy } from "platformize-framework/dist";
import { GalaceanStatsInfo } from "./Stats/GalaceanStats";

export class WechatGameProgram extends ProgramBase {
  public static async main(process?: IProcess | undefined) {
    console.log('Hello Galacean!');
    if (!process) {
      return 1;
    }

    const stats = WechatGameProgram.stats = {} as GalaceanStatsInfo;

    const performance = window.performance;

    const ts_firstContentfulPaint = performance.now();
    const ts_projectLoad = performance.now();

    process.loadResources && await asyncFuncSpy(process.loadResources);
    stats.ts_projectLoad = performance.now() - ts_projectLoad;
    console.log(`项目加载耗时:${stats.ts_projectLoad}`);

    process.onResourceLoaded && await asyncFuncSpy(process.onResourceLoaded);

    process.start && await asyncFuncSpy(process.start);
    stats.ts_firstContentfulPaint = performance.now() - ts_firstContentfulPaint;
    console.log(`首屏渲染耗时:${stats.ts_firstContentfulPaint}`);

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
      success() {
        console.log('cache stats success: ' + `${wx.env.USER_DATA_PATH}/stats.json`);
      },
      fail() {
        console.error('write stats failed');
      },
    });

    return 0;
  }
}
