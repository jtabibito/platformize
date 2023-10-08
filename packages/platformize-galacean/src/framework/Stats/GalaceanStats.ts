import StatsInfo from 'platformize-framework/src/Stats/StatsInfo';

/**
 * GalaceanStats
 * @description 提供 Galacean 统计数据
 */
export interface GalaceanStatsInfo extends StatsInfo {
  ts_engineInit?: number; // 引擎初始化时间
  ts_projectLoad?: number; // 项目加载完成时间
  ts_firstContentfulPaint?: number; // 首屏绘制内容时间
  ts_firstScreenPaint?: number; // 首屏渲染时间
  ts_firstFramePaint?: number; // 首帧渲染时间
}
