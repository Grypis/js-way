const TYPE = {
  DEPOSIT: 'deposit',
  WITHRAW: 'withdraw',
};
const account = {
  balance: 0,
  transactions: [],
};

function createTransaction(amount, type) {
  const obj = {
    id: Math.random,
    type,
    amount,
  };
  return obj;
}

function deposit(amount) {
  if (this.amount < 0) return;
  this.balance += amount;
  const transaction = this.createTransaction(amount, TYPE.DEPOSIT);
  this.transactions.push(transaction);
}

function withdraw(amount) {
  if (this.balance < amount && amount < 0) return;
  this.balance -= amount;
  const transaction = this.createTransaction(amount, TYPE.WITHRAW);
  this.transactions.push(transaction);
}

function getBalance() {
  return this.balance;
}

function getTransactionDetails(id) {
  for (const item of this.transactions) {
    if (item.id === id) {
      return item;
    }
  }
  return null;
}

function getTransactionTotal(type) {
  const result = [];
  for (let item of this.transaction) {
    if (item.type === type) {
      result.push(item);
    }
  }
  return result;
}
/* account.deposit(100);
account.deposit(500);
account.withdraw(200);
account.deposit(1000);
console.log(account.getBalance()); */
