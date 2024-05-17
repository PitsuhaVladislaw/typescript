"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccountUser = /** @class */ (function () {
    function BankAccountUser(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccountUser.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccountUser.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    BankAccountUser.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccountUser;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(initialbalance, interestRate) {
        var _this = _super.call(this, initialbalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.calculateInterest = function () {
        return this.getBalance() * (this.interestRate / 100);
    };
    return SavingsAccount;
}(BankAccountUser));
var savingsAccount = new SavingsAccount(1000, 5);
savingsAccount.deposit(500);
savingsAccount.withdraw(500);
console.log(savingsAccount.getBalance());
console.log(savingsAccount.calculateInterest());
