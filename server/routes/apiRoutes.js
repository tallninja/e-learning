const express = require("express");
const mongoose = require("mongoose");

require("../models/Material");
require("../models/RevisionQuestions");
require("../models/MarkingScheme");
require("../models/Notes");
require("../models/Video");

const requireLogin = require("../middlewares/requireLogin");
const requireAdmin = require("../middlewares/requireAdmin");

const Material = mongoose.model("materials");
const RevisionQuestions = mongoose.model("revisionQuestions");
const MarkingScheme = mongoose.model("markingScheme");
const Notes = mongoose.model("notes");
const Video = mongoose.model("videos");

const router = express.Router();

require("./materialsRoutes")(router, requireLogin, requireAdmin, Material);

require("./notesRoutes")(router, requireLogin, requireAdmin, Notes);

require("./revisionQuestionsRoutes")(
  router,
  requireLogin,
  requireAdmin,
  RevisionQuestions
);

require("./markingSchemeRoutes")(
  router,
  requireLogin,
  requireAdmin,
  MarkingScheme
);

require("./videoRoutes")(router, requireLogin, requireAdmin, Video);

module.exports = router;