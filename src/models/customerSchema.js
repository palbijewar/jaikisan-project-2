const mongoose = require('mongoose');
const uuid = require('node-uuid');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(value);
      },
      message: 'Invalid phone number',
    },
  },
  DOB: {
    type: Date,
    required: true,
  },
  emailID: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Regular expression for email validation
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email address',
    },
  },
  address: {
    type: String,
    required: true,
  },
  customerID: {
    type: String, 
    default: uuid.v1 
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE',
  },
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
