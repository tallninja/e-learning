const { model, Schema } = require("mongoose");

const videoSchema = new Schema({
  form: Number,
  subject: { type: Schema.Types.ObjectId, ref: "subjects" },
  topic: { type: Schema.Types.ObjectId, ref: "topics" },
  ytVideoURL: String,
});

model("videos", videoSchema);
