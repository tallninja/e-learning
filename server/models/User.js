const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  school: String,
  subCounty: String,
  email: String,
  username: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
});

mongoose.model("users", UserSchema);
