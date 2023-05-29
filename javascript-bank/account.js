/* exported Account */
class Account {
  constructor(number, holder, transactions) {
    this.number = number;
    this.holder = holder;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0 || !Number.isInteger(amount)) {
      return false;
    } else {
      const depositAmount = new Transaction('deposit', amount);
      this.transactions.push(depositAmount);
      return true;
    }
  }

  withdraw(amount) {
    if (amount <= 0 || !Number.isInteger(amount)) {
      return false;
    } else {
      const withdrawAmount = new Transaction('withdrawal', amount);
      this.transactions.push(withdrawAmount);
      return true;
    }
  }

  getBalance() {
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
      } else {
        balance -= this.transactions[i].amount;
      }
    }
    return balance;
  }
}
