const axios = require("axios");
const colors = require("colors");
const User = require("../database/models/userModel.js");
const {
  balanceTypeArray,
  accountTypeArray,
  signupApi,

  TransactionTypeObject,
} = require("./constants.js");

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomString(length, chars) {
  var result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

// function generate random price $
function generateRandomPrice(max) {
  return Math.floor(Math.random() * max) / 1.2;
}

// function generate random date between two dates
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// function generate random  transactions
const generateRandomTransactions = (count, bal) => {
  let transactions = [];
  let start = new Date(2022, 12, 1);
  let end = new Date(2022, 12, 30);
  const options = { year: "numeric", month: "long", day: "numeric" };

  for (let i = 0; i < count; i++) {
    let type = Object.keys(TransactionTypeObject)[
      getRandomInt(0, Object.keys(TransactionTypeObject).length - 1)
    ];
    let category = TransactionTypeObject[type][0];
    let max = TransactionTypeObject[type][1];
    let note = TransactionTypeObject[type][2];
    let description = TransactionTypeObject[type][3];
    let amount = generateRandomPrice(max).toFixed(2);
    let balance = bal - amount;

    let transaction = {
      type,
      category,
      description,
      amount,
      note,
      date: randomDate(start, end).toLocaleDateString("en-US", options),
      currency: "$",
      balance: balance.toFixed(2),
    };
    transactions.push(transaction);
  }

  return transactions;
};

const generateRandomAccount = (max) => {
  let accountNumber = "FR76300060000" + randomString(14, "0123456789");
  let name =
    "Argent Bank" +
    balanceTypeArray[getRandomInt(0, balanceTypeArray.length - 1)] +
    "(x" +
    randomString(4, "0123456789") +
    ")";
  let balance = generateRandomPrice(max).toFixed(2);
  let currency = "$";
  let description =
    accountTypeArray[Math.floor(Math.random() * balanceTypeArray.length - 1)];
  let transactions = generateRandomTransactions(getRandomInt(3, 11), balance);
  let account = {
    accountNumber,
    name,
    balance,
    currency,
    description,
    transactions,
  };
  return account;
};

const generateSommeAccounts = (length, arr) => {
  let accounts = [];
  for (let i = 0; i < length; i++) {
    accounts.push(generateRandomAccount(arr[getRandomInt(0, arr.length - 1)]));
  }
  return accounts;
};

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
    accounts: generateSommeAccounts(5, [1900, 10980, 39652]),
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
    accounts: generateSommeAccounts(4, [1570, 10990, 32350]),
  },
];

const createUsers = async () => {
  try {
    // await User.deleteMany();
    // console.log('Users removed');

    users.forEach((user) => {
      axios
        .post(signupApi, user)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    });
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  createUsers();
}

// try {
//   await User.deleteMany();
//   console.log('Users removed');

//   users.forEach((user) => {
//     axios
//       .post(signupApi, user)
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   });
// } catch (error) {
//   console.error(`${error}`.red.inverse);
//   process.exit(1);
// }

module.exports = { generateSommeAccounts };
