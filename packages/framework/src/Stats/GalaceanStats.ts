import BaseStatsInfo from './StatsInfo';

/**
 * GalaceanStats
 * @description 提供 Galacean 统计数据
 */
export interface GalaceanStatsInfo extends BaseStatsInfo {
  ts_projectLoad?: number; // 项目加载完成时间
  ts_firstContentfulPaint?: number; // 首屏绘制时间
  ts_firstFramePaint?: number; // 首帧渲染时间
}
