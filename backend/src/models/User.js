const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  authID: String,
  isAdmin: { type: Boolean, default: false },
  displayName: String,
  profileImage: String,
});

mongoose.model("users", UserSchema);
