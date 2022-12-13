const axios = require('axios');
const {
  balanceTypeArray,
  typeTransArray,
  signupApi,
} = require('./constants.js');

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
  var result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

// function generate random price $
function generateRandomPrice(max) {
  return Math.floor(Math.random() * max) / 1.2;
}

const generateRandomAccount = (max) => {
  let accountNumber = 'FR76300060000' + randomString(14, '0123456789');
  let name =
    'Argent Bank' +
    balanceTypeArray[getRandomInt(0, balanceTypeArray.length - 1)] +
    '(x' +
    randomString(4, '0123456789');
  let balance = generateRandomPrice(max).toFixed(2);
  let currency = '$';
  let description =
    typeTransArray[Math.floor(Math.random() * balanceTypeArray.length - 1)];
  let account = {
    accountNumber,
    name,
    balance,
    currency,
    description,
  };
  return account;
};

function generateSommeAccounts(length, arr) {
  let accounts = [];
  for (let i = 0; i < length; i++) {
    accounts.push(generateRandomAccount(arr[getRandomInt(0, arr.length - 1)]));
  }
  return accounts;
}

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    accounts: generateSommeAccounts(5, [1900, 10980, 39652]),
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    accounts: generateSommeAccounts(4, [1570, 10990, 32350]),
  },
];

users.forEach((user) => {
  axios
    .post(signupApi, user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
