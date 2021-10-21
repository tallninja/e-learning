const express = require("express");
const mongoose = require("mongoose");

require("../models/Subject");
require("../models/Topic");
require("../models/RevisionQuestions");
require("../models/MarkingScheme");
require("../models/Notes");
require("../models/Video");

const requireLogin = require("../middlewares/requireLogin");
const requireAdmin = require("../middlewares/requireAdmin");

const Subject = mongoose.model("subjects");
const Topic = mongoose.model("topics");
const RevisionQuestions = mongoose.model("revisionQuestions");
const MarkingScheme = mongoose.model("markingScheme");
const Notes = mongoose.model("notes");
const Video = mongoose.model("videos");

const router = express.Router();

require("./subjectRoutes")(router, requireLogin, requireAdmin, Subject);

require("./topicsRoutes")(router, requireLogin, requireAdmin, Topic);

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

require("./fileUploadRoutes")(router, requireLogin, requireAdmin);

module.exports = router;
