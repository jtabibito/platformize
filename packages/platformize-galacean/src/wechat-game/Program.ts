import { Program as ProgramBase } from "platformize-framework/dist";

export class WechatGameProgram extends ProgramBase {
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
