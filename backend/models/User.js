const mongoose = require('mongoose');
const { Schema } = mongoose;
// The above line is shortcut for ->  const Schema  = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema);