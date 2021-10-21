const mongoose = require("mongoose");

const { Schema } = mongoose;

const NotesSchema = new Schema({
  form: Number,
  subject: { type: Schema.Types.ObjectId, ref: "subjects" },
  topic: { type: Schema.Types.ObjectId, ref: "topics" },
  fileURL: String,
  fileName: String,
});

mongoose.model("notes", NotesSchema);
