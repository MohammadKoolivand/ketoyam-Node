const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    phoneNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
