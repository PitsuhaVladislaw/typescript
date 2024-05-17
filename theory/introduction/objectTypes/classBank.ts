class BankAccountUser {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if(amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccountUser {
    private interestRate: number;

    constructor(initialbalance: number, interestRate: number) {
        super(initialbalance);
        this.interestRate = interestRate;
    }

    public calculateInterest(): number {
        return this.getBalance() * (this.interestRate / 100);
    }
}

const savingsAccount = new SavingsAccount(1000, 5);
savingsAccount.deposit(500);
savingsAccount.withdraw(500);

console.log(savingsAccount.getBalance());
console.log(savingsAccount.calculateInterest());