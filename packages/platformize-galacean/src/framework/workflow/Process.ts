import { IProcess } from "platformize-framework/dist";

export interface GalaceanProcess extends IProcess {
  createEngine?: () => void;
}
