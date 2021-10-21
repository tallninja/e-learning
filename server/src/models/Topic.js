const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;

const TopicSchema = new Schema({
  form: Number,
  subject: { type: Schema.Types.ObjectId, ref: "subjects" },
  title: String,
  _user: { type: Schema.Types.ObjectId, ref: "users" },
});

TopicSchema.plugin(mongoosePaginate);

mongoose.model("topics", TopicSchema);
