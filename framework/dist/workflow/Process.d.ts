export declare class IProcess {
    createEngine?: () => void;
    loadResources?: () => void;
    onResourceLoaded?: () => void;
    start?: () => void;
}
