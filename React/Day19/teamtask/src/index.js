


const transactions = [
  { type: "debit", amount: 2000, timestamp: "10:00" },
  { type: "credit", amount: 3000, timestamp: "10:05" },
  { type: "debit", amount: 7000, timestamp: "10:10" },
  { type: "debit", amount: 1000, timestamp: "10:15" }
];

let balance = 5000;
let rejected = [];

transactions.forEach((t) => {
  if (t.type === "credit") {
    balance += t.amount;
  } 
  else if (t.type === "debit") {
    if (t.amount <= balance) {
      balance -= t.amount;
    } 
    else {
      rejected.push(t);
    }
  }

  t.balance = balance;
});

console.log("Transactions:", transactions);
console.log("Rejected Transactions:", rejected);
console.log("Final Balance:", balance);