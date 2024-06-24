function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
export var IProcess = function IProcess() {
    "use strict";
    _class_call_check(this, IProcess);
    _define_property(this, "createEngine", void 0);
    _define_property(this, "loadResources", void 0);
    _define_property(this, "onResourceLoaded", void 0);
    _define_property(this, "start", void 0);
};
