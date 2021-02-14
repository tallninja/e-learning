const express = require("express");
const mongoose = require("mongoose");

require("../models/Material");
require("../models/RevisionQuestions");
require("../models/MarkingScheme");
require("../models/Notes");

const requireLogin = require("../middlewares/requireLogin");

const Material = mongoose.model("materials");
const RevisionQuestions = mongoose.model("revisionQuestions");
const MarkingScheme = mongoose.model("markingScheme");
const Notes = mongoose.model("notes");

const router = express.Router();

require("./materialsRoutes")(router, requireLogin);

require("./notesRoutes")(router, requireLogin);

require("./revisionQuestionsRoutes")(router, requireLogin);

require("./markingSchemeRoutes")(router, requireLogin);

module.exports = router;
