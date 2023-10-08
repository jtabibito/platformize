export interface IProcess {
  loadResources?: () => void;
  onResourceLoaded?: () => void;
  start?: () => void;
}
