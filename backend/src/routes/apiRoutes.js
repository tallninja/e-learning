const express = require("express");
const mongoose = require("mongoose");

require("../models/Material");
require("../models/RevisionQuestions");
require("../models/MarkingScheme");
require("../models/Notes");

const requireLogin = require("../middlewares/requireLogin");
const requireAdmin = require("../middlewares/requireAdmin");

const Material = mongoose.model("materials");
const RevisionQuestions = mongoose.model("revisionQuestions");
const MarkingScheme = mongoose.model("markingScheme");
const Notes = mongoose.model("notes");

const router = express.Router();

require("./materialsRoutes")(router, requireLogin, requireAdmin);

require("./notesRoutes")(router, requireLogin, requireAdmin);

require("./revisionQuestionsRoutes")(router, requireLogin, requireAdmin);

require("./markingSchemeRoutes")(router, requireLogin, requireAdmin);

module.exports = router;
