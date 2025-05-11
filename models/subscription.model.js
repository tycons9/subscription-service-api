// subscription.model.js
import mongoose from 'mongoose';

const subscriptionsSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, 'Subscription name is required'],
    trim: true,
    minLength: 2,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: [true, 'Subscription price is required'],
    min: [0, 'Price must be greater than 0'],
  },
  currency: {
    type: String,
    enum: ['ETB', 'EUR', 'GBP'],
    default: 'ETB',
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
  },
  category: {
    type: String,
    enum: ['sports', 'Technology', 'Health', 'Education', 'Art', 'Business'],
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['active', 'cancelled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: true,
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: 'Renewal date must be after the start date',
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
}, {
  timestamps: true,
});

// Auto-calculate renewalDate before saving, if not set
subscriptionsSchema.pre('save', function (next) {
  if (!this.renewalDate && this.frequency && this.startDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    const daysToAdd = renewalPeriods[this.frequency] || 0;

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + daysToAdd);
  }
  next();
});

const Subscription = mongoose.model('Subscription', subscriptionsSchema);
export default Subscription;
