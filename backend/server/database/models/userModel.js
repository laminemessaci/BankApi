const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      default: 'Not defined',
    },
    amount: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    currency: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: 'Not defined',
    },
    note: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
);

const accountSchema = mongoose.Schema(
  {
    accountNumber: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: false,
      default: '$',
    },
    description: {
      type: String,
      required: true,
      default: 'Credit Card',
    },
    transactions: [transactionSchema],
  },

  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    accounts: [accountSchema],
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model('User', userSchema);
