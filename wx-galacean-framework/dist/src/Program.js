function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { Program, asyncFuncSpy } from "@engine-framework/framework";
export var WechatMiniGameProgram = /*#__PURE__*/ function(Program) {
    "use strict";
    _inherits(WechatMiniGameProgram, Program);
    var _super = _create_super(WechatMiniGameProgram);
    function WechatMiniGameProgram() {
        _class_call_check(this, WechatMiniGameProgram);
        return _super.apply(this, arguments);
    }
    _create_class(WechatMiniGameProgram, null, [
        {
            key: "main",
            value: function main(process) {
                var _this = this;
                return _async_to_generator(function() {
                    var stats, performance, ts_engineInit, engine, ts_projectLoad, resources, ts_firstScreenPaint, _tmp, _tmp1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                console.log('Hello Galacean!');
                                if (!process) {
                                    return [
                                        2,
                                        1
                                    ];
                                }
                                // @ts-ignore
                                stats = WechatMiniGameProgram.stats = {};
                                performance = window.performance;
                                ts_engineInit = performance.now();
                                // 创建引擎
                                engine = undefined;
                                if (!process.createEngine) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    asyncFuncSpy.call(_this, process.createEngine, "createEngine")
                                ];
                            case 1:
                                engine = _state.sent();
                                _state.label = 2;
                            case 2:
                                stats.ts_engineInit = performance.now() - ts_engineInit;
                                // 工程加载开始时间
                                ts_projectLoad = performance.now();
                                // 加载资源
                                resources = undefined;
                                if (!process.loadResources) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    asyncFuncSpy.call(_this, process.loadResources, engine, "loadResources")
                                ];
                            case 3:
                                resources = _state.sent();
                                _state.label = 4;
                            case 4:
                                stats.ts_projectLoad = performance.now() - ts_projectLoad;
                                // 首屏渲染开始时间
                                ts_firstScreenPaint = performance.now();
                                // 资源加载完成
                                _tmp = process.onResourceLoaded;
                                if (!_tmp) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    asyncFuncSpy.call(_this, process.onResourceLoaded, resources, "resourceLoaded")
                                ];
                            case 5:
                                _tmp = _state.sent();
                                _state.label = 6;
                            case 6:
                                _tmp;
                                // 执行业务逻辑
                                _tmp1 = process.start;
                                if (!_tmp1) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    asyncFuncSpy.call(_this, process.start, engine, "start")
                                ];
                            case 7:
                                _tmp1 = _state.sent();
                                _state.label = 8;
                            case 8:
                                _tmp1;
                                stats.ts_firstScreenPaint = performance.now() - ts_firstScreenPaint;
                                stats.ts_firstContentfulPaint = performance.now() - ts_engineInit;
                                return [
                                    2,
                                    0
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "uploadStats",
            value: function uploadStats() {
                return _async_to_generator(function() {
                    var wxGame, fs;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // @ts-ignore
                                wxGame = wx;
                                fs = wxGame.getFileSystemManager();
                                if (!fs) {
                                    console.error('getFileSystemManager failed');
                                    return [
                                        2,
                                        1
                                    ];
                                }
                                return [
                                    4,
                                    fs.writeFile({
                                        filePath: "".concat(wxGame.env.USER_DATA_PATH, "/stats.json"),
                                        // @ts-ignore
                                        data: JSON.stringify(WechatMiniGameProgram.stats),
                                        encoding: 'utf8',
                                        // @ts-ignore
                                        success: function success(res) {
                                            console.log(res);
                                            console.log('cache stats success: ' + "".concat(wxGame.env.USER_DATA_PATH, "/stats.json"));
                                        },
                                        fail: function fail() {
                                            console.error('write stats failed');
                                        }
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    0
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return WechatMiniGameProgram;
}(Program);
