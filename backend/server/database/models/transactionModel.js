import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Account',
  },

  transaction: [
    {
      transactionNumber: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
        default: 0.0,
      },
      currency: {
        type: String,
        required: true,
      },
      description: {
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
      },
      note: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
