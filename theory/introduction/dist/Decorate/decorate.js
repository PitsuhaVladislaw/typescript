"use strict";
/*
function Logger(target: Function) {
    console.log(`Logging class: ${target.name}`);
}

@Logger
class MyClass {
    constructor() {}
}
*/
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function Log2(target, key) {
    console.log("Logging method: ".concat(key, " in ").concat(target.constructor.name));
}
var MyClassD2 = /** @class */ (function () {
    function MyClassD2() {
    }
    //@Log
    MyClassD2.prototype.myMethod = function () { };
    return MyClassD2;
}());
function ReadOnly(target, key) {
    Object.defineProperty(target, key, { writable: false });
}
var MyClassD3 = /** @class */ (function () {
    function MyClassD3() {
        //@ReadOnly
        this.myProperty = 'read-only';
    }
    return MyClassD3;
}());
function Repeat(count) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            for (var i = 0; i < count; i++) {
                originalMethod.apply(this, arguments);
            }
        };
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    //@Repeat(3)
    MyClass.prototype.myMethod = function () {
        console.log('Hello');
    };
    return MyClass;
}());
function Injectable(target) {
    // Logic for dependency injection
}
var MyService = function () {
    var _classDecorators = [Injectable];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyService = _classThis = /** @class */ (function () {
        function MyService_1() {
        }
        return MyService_1;
    }());
    __setFunctionName(_classThis, "MyService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyService = _classThis;
}();
function Log(target, key) {
    console.log("Logging method: ".concat(key, " in ").concat(target.constructor.name));
}
var LoggerG = /** @class */ (function () {
    function LoggerG() {
    }
    //@Log
    LoggerG.prototype.logMessage = function (message) {
        console.log("Message logged: ".concat(message));
    };
    return LoggerG;
}());
function Measuere(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var start = performance.now();
        var result = originalMethod.apply(this, args);
        var end = performance.now();
        console.log("Method ".concat(key, " executed in ").concat(end - start, "ms"));
        return result;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //@Measuere
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
//const loggerG = LoggerG();
//loggerG.logMessage('Hello, Decorates!');
var calculator = new Calculator();
console.log(calculator.add(5, 3));
