const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
});

SubjectSchema.plugin(mongoosePaginate);

mongoose.model("subjects", SubjectSchema);
