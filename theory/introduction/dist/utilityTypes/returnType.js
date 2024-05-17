"use strict";
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
function getLength(str) {
    return str.length;
}
var lengthRT = getLength('Hello');
console.log(lengthRT);
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
var radius = 5;
var area = calculateArea(radius);
console.log("The area of a circle with radius ".concat(radius, " is ").concat(area.toFixed(2)));
function arrayElementType(arr) {
    return arr[0];
}
var numbersRT = [1, 2, 3, 4, 5];
var firstNumberRT = arrayElementType(numbersRT);
var strings = ["apple", "banana", "orange"];
var firstString = arrayElementType(strings);
function logExecution(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyKey, " with arguments: ").concat(JSON.stringify(args)));
        var result = originalMethod.apply(this, args);
        console.log("Result of ".concat(propertyKey, ": ").concat(result));
        return result;
    };
    return descriptor;
}
var MathOperations = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    var _subtract_decorators;
    return _a = /** @class */ (function () {
            function MathOperations() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            MathOperations.prototype.add = function (a, b) {
                return a + b;
            };
            MathOperations.prototype.subtract = function (a, b) {
                return a - b;
            };
            return MathOperations;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [logExecution];
            _subtract_decorators = [logExecution];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _subtract_decorators, { kind: "method", name: "subtract", static: false, private: false, access: { has: function (obj) { return "subtract" in obj; }, get: function (obj) { return obj.subtract; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var math = new MathOperations();
math.add(5, 3); // Logs: "Calling add with arguments: [5,3]", "Result of add: 8"
math.subtract(10, 4); // Logs: "Calling subtract with arguments: [10,4]", "Result of subtract: 6"
