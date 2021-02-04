const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;

const MaterialSchema = new Schema({
  subject: String,
  title: String,
  content: String,
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  author: String,
  avatarURL: String,
  dateCreated: Date,
});

MaterialSchema.plugin(mongoosePaginate);

mongoose.model("materials", MaterialSchema);
