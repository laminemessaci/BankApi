const mongoose = require('mongoose');

const accountSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    account: [
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
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// const Account = mongoose.model('Account', accountSchema);

module.exports = mongoose.model('Account', accountSchema);
