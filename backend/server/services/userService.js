const User = require('../database/models/userModel');
const { generateSommeAccounts } = require('./../scripts/populateDatabase');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Account } = require('../database/models/accountModel.js');

module.exports.createUser = async (serviceData) => {
  try {
    const userExist = await User.findOne({ email: serviceData.email });
    if (userExist) {
      throw new Error('Email already exists');
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12);
    const newUser = new User({
      email: serviceData.email,
      password: hashPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      accounts: generateSommeAccounts(3, [1900, 19658, 35289]),
    });

    let user = await newUser.save();

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    );

    return { user, token };
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error);
  }
};

module.exports.getUserProfile = async (serviceData) => {
  try {
    const accounts = await Account.find({ user: req.user._id });
    const jwtToken = serviceData.headers.authorization
      .split('Bearer')[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });

    if (!user) {
      throw new Error('User not found!');
    }
    user.toObject();
    return { user, accounts };
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error);
  }
};

module.exports.loginUser = async (serviceData) => {
  try {
    const user = await User.findOne({ email: serviceData.email });

    if (!user) {
      throw new Error('User not found!');
    }

    const isValid = await bcrypt.compare(serviceData.password, user.password);

    if (!isValid) {
      throw new Error('Password is invalid');
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    );

    return { token, user };
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error);
  }
};

module.exports.updateUserProfile = async (serviceData) => {
  try {
    const jwtToken = serviceData.headers.authorization
      .split('Bearer')[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        firstName: serviceData.body.firstName,
        lastName: serviceData.body.lastName,
      },
      { new: true }
    );

    if (!user) {
      throw new Error('User not found!');
    }

    return { user };
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error);
  }
};
