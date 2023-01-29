// In this assignment, we'll build a small banking application and look at how
// we can use closures to control access to the application's data. We'll
// proceed through this assignment using some example code and then you will
// write code that satisfies it.

// 1. Create an object named account that represents a bank account. It should
// contain a balance property that stores the account's current balance.

// const account = {
//   balance: 0
// }

// 2. Add a deposit method to the account object that takes a single argument,
// the value of the deposit. The deposit method adds the value of the argument
// passed to it to the account's balance, and then returns the deposit amount.

// const account = {
//   balance: 0,
//   deposit(amount) {
//     this.balance += amount
//     return amount
//   },
// }

// 3. Add a withdraw method to the account object that takes a single argument,
// the amount to withdraw. It should subtract the amount from the account's
// balance and return the amount subtracted.

// const account = {
//   balance: 0,
//   deposit(amount) {
//     this.balance += amount
//     return amount
//   },
//   withdraw(amount) {
//     const newBalance = this.balance - amount
//     const isZero = newBalance >= 0
//     this.balance = isZero ? newBalance : 0
//     return isZero ? balance : amount
//   }
// }

// 4. Each account should have a record of every deposit and withdrawal applied
// to it. To do this, add a property named transactions to account that
// contains an array of transactions, each of which is an object with type and
// amount properties.

// const account = {
//   balance: 0,
//   transactions: [],
//   deposit(amount) {
//     this.balance += amount
//     this.transactions.push({ type: 'deposit', amount: amount })
//     return amount
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       amount = this.balance
//     }
//     this.balance -= amount
//     this.transactions.push({type: 'withdraw', amount: amount})
//     return amount
//   },
// }

// 5. We want to create more than one account. Move the account creation code
// to a function named makeAccount that returns a new account object.

// const makeAccount = () => {
//   return {
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.balance += amount
//       this.transactions.push({ type: 'deposit', amount: amount })
//       return amount
//     },
//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance
//       }
//       this.balance -= amount
//       this.transactions.push({ type: 'withdraw', amount: amount })
//       return amount
//     },
//   }
// }

// 6. We also need an object to manage accounts: a bank. Create a function that
// returns an object that represents a bank. The bank should have a property
// named accounts that represents a list of accounts.

// const makeBank = () => {
//   return {
//     accounts: [],
//   }
// }

// 7. Add a new method named openAccount to the object returned by makeBank. It
// should create a new account, add it to the bank's accounts collection, and
// return the new account. Each new account should have a unique account
// number, starting at 101; each account number should be one greater than the
// previous account created.

// const makeAccount = (number) => {
//   return {
//     number,
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.balance += amount
//       this.transactions.push({ type: 'deposit', amount: amount })
//       return amount
//     },
//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance
//       }
//       this.balance -= amount
//       this.transactions.push({ type: 'withdraw', amount: amount })
//       return amount
//     },
//   }
// }
// const makeBank = () => {
//   return {
//     accounts: [],
//     openAccount() {
//       let currentAccountNumber = this.accounts.length + 101
//       const account = makeAccount(currentAccountNumber)
//       this.accounts.push(account)
//       return account
//     },
//   }
// }

// const bank = makeBank();
// const account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102

// 8. Add a new method to the bank object that transfers money from one account
// to another.


// const makeAccount = (number) => {
//   return {
//     number,
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.balance += amount
//       this.transactions.push({ type: 'deposit', amount: amount })
//       return amount
//     },
//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance
//       }
//       this.balance -= amount
//       this.transactions.push({ type: 'withdraw', amount: amount })
//       return amount
//     },
//   }
// }
// const makeBank = () => {
//   return {
//     accounts: [],
//     openAccount() {
//       let currentAccountNumber = this.accounts.length + 101
//       const account = makeAccount(currentAccountNumber)
//       this.accounts.push(account)
//       return account
//     },
//     transfer(source, destination, amount) {
//       if (amount > source.balance) {
//         console.log(`Insufficient funds`)
//         return;
//       }
//       destination.deposit(source.withdraw(amount))
//     },
//   }
// }

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // 7

// 9. Change the code so that users can access the account balance, account
// number, and transactions list by calling methods, but not by directly
// accessing those properties.

// const makeAccount = (number) => {
//   let balance = 0
//   let transactions = []
//   return {
//     number() {
//       return number
//     },
//     balance() {
//       return balance
//     },
//     transactions() {
//       return transactions
//     },
//     deposit(amount) {
//       this.balance += amount
//       this.transactions.push({ type: 'deposit', amount: amount })
//       return amount
//     },
//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance
//       }
//       this.balance -= amount
//       this.transactions.push({ type: 'withdraw', amount: amount })
//       return amount
//     },
//   }
// }
// const makeBank = () => {
//   return {
//     accounts: [],
//     openAccount() {
//       let currentAccountNumber = this.accounts.length + 101
//       const account = makeAccount(currentAccountNumber)
//       this.accounts.push(account)
//       return account
//     },
//     transfer(source, destination, amount) {
//       if (amount > source.balance) {
//         console.log(`Insufficient funds`)
//         return;
//       }
//       destination.deposit(source.withdraw(amount))
//     },
//   }
// }

// 10. Change the code so that users can no longer access the list of accounts.

const makeAccount = (number) => {
  let balance = 0
  let transactions = []
  return {
    number() {
      return number
    },
    balance() {
      return balance
    },
    transactions() {
      return transactions
    },
    deposit(amount) {
      this.balance += amount
      this.transactions.push({ type: 'deposit', amount: amount })
      return amount
    },
    withdraw(amount) {
      if (amount > this.balance) {
        amount = this.balance
      }
      this.balance -= amount
      this.transactions.push({ type: 'withdraw', amount: amount })
      return amount
    },
  }
}
const makeBank = () => {
  let accounts = []
  return {
    openAccount() {
      let currentAccountNumber = accounts.length + 101
      const account = makeAccount(currentAccountNumber)
      accounts.push(account)
      return account
    },
    transfer(source, destination, amount) {
      if (amount > source.balance) {
        console.log(`Insufficient funds`)
        return;
      }
      destination.deposit(source.withdraw(amount))
    },
  }
}
