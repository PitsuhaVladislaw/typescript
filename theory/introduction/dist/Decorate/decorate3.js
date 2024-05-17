"use strict";
function ValidateInput(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            if (typeof arg !== 'number') {
                throw new Error('Input parameters must be numbers');
            }
        }
        return originalMethod.apply(this, args);
    };
}
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    //@ValidateInput
    MathOperations.add = function (a, b) {
        return a + b;
    };
    return MathOperations;
}());
console.log(MathOperations.add(5, 3)); // Выводит 8
//console.log(MathOperations.add('5', 3)); 
function CacheD(target, key, descriptor) {
    var cache = new Map();
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = args.join('_');
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
var DataService = /** @class */ (function () {
    function DataService() {
    }
    //@CacheD
    DataService.prototype.fetchData = function (endpoint) {
        return fetch(endpoint).then(function (response) { return response.json(); });
    };
    return DataService;
}());
var dataService = new DataService();
dataService.fetchData('https://api.example.com/data').then(function (data) {
    console.log(data);
});
function LogError(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            return originalMethod.apply(this, args);
        }
        catch (error) {
            //console.error(`Error in method ${key}: ${error.message}`);
        }
    };
}
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    //@LogError
    ErrorHandler.throwError = function () {
        throw new Error('An error occurred');
    };
    return ErrorHandler;
}());
ErrorHandler.throwError(); // Выведет сообщение об ошибке в консоль
