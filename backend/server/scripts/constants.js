const accountTypeArray = ['Credit Card', 'Checking', 'Savings'];

const balanceTypeArray = [
  ' Current Balance',
  ' Available Balance',
  ' Credit Balance',
  ' Consumer credit',
];

const TransactionTypeObject = {
  Travel: ['Air France', 1000, 'Fly Paris - Marseille', 'Holidays'],
  Shopping: ['Clothes, Chooses', 500, 'Chooses children', 'Decathlon-Sport'],
  Entertainment: ['Decoration', 100, 'Living room frames', 'Style'],
  Health: [
    'Medicine, consultation',
    60,
    'pediatric consultation',
    'Daughter Aya',
  ],
  Electronic: ['PC MSI', 2000, 'PC for Aya', 'College'],
  Home: ['Kitchen accessory', 250, 'Change of covers and cups', 'Kitchen'],
  Restaurant: ['Food', 80, 'Diner', 'Lucciola Restaurant'],
  Transport: ['Bus ticket', 50, 'monthly subscription', 'Metro'],
  Other: ['Hairdresser, Barber ... ', 30, 'Lifestyle', 'Various purchases'],
};

const signupApi = 'http://localhost:3001/api/v1/user/signup';

module.exports = {
  accountTypeArray,
  balanceTypeArray,
  TransactionTypeObject,
  signupApi,
};
