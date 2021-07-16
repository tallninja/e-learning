const { model, Schema } = require("mongoose");

const videoSchema = new Schema({
  materialID: { type: Schema.Types.ObjectId, ref: "materials" },
  ytVideoURL: String,
});

model("videos", videoSchema);
