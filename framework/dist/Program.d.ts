import { IProcess } from "./workflow";
import { IStats } from "./stats";
declare function asyncFuncSpy(this: any, fn: Function, ...args: any[]): Promise<any>;
declare class Program {
    /**
     * stats
     * @description 统计数据
     */
    static stats: IStats;
    /**
     * main
     * @description 程序入口
     */
    static main(process?: IProcess): Promise<number>;
    /**
     * uploadStats
     * @description 上传统计数据
     * @returns
     */
    static uploadStats(): Promise<number>;
}
export { Program, asyncFuncSpy };
