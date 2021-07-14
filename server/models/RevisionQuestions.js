const mongoose = require("mongoose");

const { Schema } = mongoose;

const RevisionQuestionsSchema = new Schema({
  materialID: { type: Schema.Types.ObjectId, ref: "materials" },
  content: String,
});

mongoose.model("revisionQuestions", RevisionQuestionsSchema);
