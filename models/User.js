/*

// database dependency (not installed in this demo file but needed when database integration includes)
const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')()


const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      hide: true,
    },
    avatarUrl: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false
  }
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10); // encrypt password before saving to database
  next();
});

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // compare the encrypted passwords ( decryption is not recommended for security reasons )
};

userSchema.plugin(mongooseHidden, { hidden: { _id: false } })
module.exports = mongoose.model('User', userSchema);

*/