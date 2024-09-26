import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

const User = mongoose.model('User', userSchema);

export default User;