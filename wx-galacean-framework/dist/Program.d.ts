import { Program, IProcess } from "engine-runtime-framework";
export declare class WechatMiniGameProgram extends Program {
    static main(process?: IProcess | undefined): Promise<1 | 0>;
    static uploadStats(): Promise<1 | 0>;
}
