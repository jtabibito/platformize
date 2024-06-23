export interface IProcess {
  createEngine?: () => void;
  loadResources?: () => void;
  onResourceLoaded?: () => void;
  start?: () => void;
}
