import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    trim: true,
    minLength: 5,
    maxLength: 255,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email address.'],
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    minLength: 6,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
