import { IStats } from "engine-framework";
/**
 * GalaceanStats
 * @description 提供 Galacean 统计数据
 */
export declare class GalaceanStats extends IStats {
    ts_engineInit?: number;
    ts_projectLoad?: number;
    ts_firstContentfulPaint?: number;
    ts_firstScreenPaint?: number;
    ts_firstFramePaint?: number;
}
