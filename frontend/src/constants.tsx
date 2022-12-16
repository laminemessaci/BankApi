export const BASE_URL: () => string = () => 'http://localhost:3001/api/v1/user/'

export type IFeat = {
  label: string
  icon: string
  titre: string
  text: string
}

export type IAccount = {
  check: string
  credit: string
  name: string
  balance: number
  currency: string
  description: string
  linkedId: string
}

export type IArgentB = {
  id: string
  accounts: IAccount[]
}

export type FormValues = {
  email: string | null
  firstName: string | null
  lastName: string | null
  password: string | null
  confirmPassword: string | null
}

export const FEAT_DATA: Array<IFeat> = [
  {
    label: 'chat',
    icon: 'icon-chat.png',
    titre: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    label: 'money',
    icon: 'icon-money.png',
    titre: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    label: 'security',
    icon: 'icon-security.png',
    titre: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

// export const ARGENT_BANK: IArgentB[] = [
//   {
//     id: '6362708457c28472fbcb0b94',
//     accounts: [
//       {
//         check: 'Argent Bank Checking (x8349)',
//         credit: '$2,082.79',
//         balance: 'Available Balance',
//       },
//       {
//         check: 'Argent Bank Savings (x6712)',
//         credit: '$10,928.42',
//         balance: 'Available Balance',
//       },
//       {
//         check: 'Argent Bank Credit Card (x8349)',
//         credit: '$184.30',
//         balance: 'Current Balance',
//       },
//     ],
//   },
//   {
//     id: '6362708457c28472fbcb0b93',
//     accounts: [
//       {
//         check: 'Argent Bank Checking (x7654)',
//         credit: '$3,082.79',
//         balance: 'Available Balance',
//       },
//       {
//         check: 'Argent Bank Savings (x6743)',
//         credit: '$15,928.42',
//         balance: 'Available Balance',
//       },
//       {
//         check: 'Argent Bank Credit Card (x7654)',
//         credit: '$394.50',
//         balance: 'Current Balance',
//       },
//     ],
//   },
// ]
