/* exported Bank */
class Bank {
  constructor() {
    this.nextAccountNumber = 1;
    this.accounts = [];
  }

  openAccount(holder, balance) {
    if (balance <= 0 || !Number.isInteger(balance)) {
      return null;
    } else {
      const newAccount = new Account(this.nextAccountNumber, holder);
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    }
  }

  getAccount(number) {
    for (let j = 0; j < this.accounts.length; j++) {
      if (this.accounts[j].number === number) {
        return this.accounts[j];
      }
    }
    return null;
  }
}
