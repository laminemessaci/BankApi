const axios = require('axios');
const signupApi = 'http://localhost:3001/api/v1/user/signup';
const profileApi = 'http://localhost:3001/api/v1/user/profile';

const accounts = [
  {
    accountNumber: 'FR7630001007941234567890185',
    name: 'Argent Bank Checking (x8349)',
    balance: 2082.79,
    currency: '$',
    description: 'Available Balance',
  },
  {
    accountNumber: 'FR7630004000031234567890143',
    name: 'Argent Bank Savings (x6712)',
    balance: 10928.42,
    currency: '$',
    description: 'Available Balance',
  },
  {
    accountNumber: 'FR7630006000011234567890189',
    name: 'Argent Bank Credit Card (x8349)',
    balance: 882.99,
    currency: '$',
    description: 'Current Balance',
  },
];

const accounts2 = [
  {
    accountNumber: 'FR7630001007941234567123456',
    name: 'Argent Bank Checking (x9856)',
    balance: 2356.79,
    currency: '$',
    description: 'Available Balance',
  },
  {
    accountNumber: 'FR7630004000031234567789654',
    name: 'Argent Bank Savings (x6576)',
    balance: 12568.42,
    currency: '$',
    description: 'Available Balance',
  },
  {
    accountNumber: 'FR7630006000011234567286437',
    name: 'Argent Bank Credit Card (x2504)',
    balance: 8235.99,
    currency: '$',
    description: 'Current Balance',
  },
];

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    accounts: accounts,
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    accounts: accounts2,
  },
];

users.forEach((user) => {
  axios
    .post(signupApi, user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
// accounts.forEach((account) => {
//   axios
//     .post(profileApi, account)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// });
