const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
});

mongoose.model("subjects", SubjectSchema);
