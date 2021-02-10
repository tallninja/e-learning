const mongoose = require("mongoose");

const { Schema } = mongoose;

const NotesSchema = new Schema({
  materialID: { type: Schema.Types.ObjectId, ref: "materials" },
  content: String,
});

mongoose.model("notes", NotesSchema);
