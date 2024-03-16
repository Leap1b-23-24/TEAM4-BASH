import { Schema, model } from "mongoose";

export const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

export const UserModel = model("user", userSchema);
