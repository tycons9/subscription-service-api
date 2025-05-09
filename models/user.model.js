const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user Name required'],
    trim: true,
    minLenfth:2,
    maxLength:50,
  },
  email: {
    type: String,
    required: [true, 'user Email is required'],
    unique: true,
    trim: true,
     minLenfth:5,
    maxLength:255,
    lowercase:true,
   match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email address.'],
  },
  password: {
    type: String,
    required: [true, 'user Password is required'],
    minLength:6,
  },
  subscriptions: [{
    serviceName: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    renewalDate: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update `updatedAt` field before saving
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
