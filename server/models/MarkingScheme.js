const mongoose = require("mongoose");

const { Schema } = mongoose;

const MarkingSchemeSchema = new Schema({
  materialID: { type: Schema.Types.ObjectId, ref: "materials" },
  content: String,
});

mongoose.model("markingScheme", MarkingSchemeSchema);
