const accounts = []

function Account(accountNumber, ownerName){
  this.accountNumber = accountNumber;
  this.balance = 0;
  this.ownerName = ownerName;
}

Account.prototype.deposit = function(amountDeposited){
  this.balance += amountDeposited;
  console.log(`$${amountDeposited} has successfully been added to your account.`);
  console.log(`Your new account balance is $${this.balance.toFixed(2)}`);
}

Account.prototype.withdraw = function(amountWithdrawn){
  if (amountWithdrawn <= this.balance) {
    this.balance -= amountWithdrawn;
    console.log(`$${amountWithdrawn} has successfully been Withdrawn from your account.`);
    console.log(`Your new account balance is $${this.balance.toFixed(2)}`);
  } else {
    console.log("Insufficient Funds")
  }
}

Account.prototype.interest = function(interestRate, years){
  const compoundedBalance = this.balance * Math.pow(1 + interestRate / 100, years);
  const interestEarned = compoundedBalance + this.balance;
  const totalInterestEarned = interestEarned - this.balance;
  console.log(`Your account balance would be $${interestEarned.toFixed(2)} after ${years} years.`);
  console.log(`Total amount of interest paid out would be $${totalInterestEarned.toFixed(2)}.`)
}

Account.prototype.displayInfo = function(){
  console.log(`Account Owner: ${this.ownerName}`);
  console.log(`Account Number: ${this.accountNumber}`);
  console.log(`Account Amount: ${this.balance}`);
}

function addAccount(accountNumber,ownerName){
  const newAccount = new Account (accountNumber,ownerName);
  accounts.push(newAccount);
  console.log(`${ownerName} has made a new account with account #${accountNumber}`)
}

function accountSearch(search){
  return accounts.filter(acc => acc.accountNumber.includes(search) || acc.ownerName.includes(search))
}

function receivedAccountInfo(object){
  const resultInfo = accountSearch(object)
  const result = resultInfo.forEach(acc => acc)
  for (const account in resultInfo)
    return resultInfo[account]
}

addAccount("1234","Daniel Durant")

const acc = receivedAccountInfo("1234")

acc.deposit(60000)
acc.withdraw(200)
acc.interest(3,20)
