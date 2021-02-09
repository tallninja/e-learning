const express = require("express");
const mongoose = require("mongoose");

require("../models/Material");
require("../models/RevisionQuestions");
require("../models/MarkingScheme");

const requireLogin = require("../middlewares/requireLogin");

const Material = mongoose.model("materials");
const RevisionQuestions = mongoose.model("revisionQuestions");
const MarkingScheme = mongoose.model("markingScheme");

const router = express.Router();

// get all materials
const getMaterials = require("../controllers/materials/getMaterials");
router.get("/materials/all", async (req, res) =>
  getMaterials(req, res, Material)
);

// create a material
const createMaterial = require("../controllers/materials/createMaterial");
router.post("/materials", requireLogin, (req, res) =>
  createMaterial(req, res, Material)
);

// get a list of users Materials
const getUserMaterials = require("../controllers/materials/getUserMaterials");
router.get("/materials", requireLogin, (req, res) =>
  getUserMaterials(req, res, Material)
);

// get a single Material
const getMaterial = require("../controllers/materials/getMaterial");
router.get("/materials/item", (req, res) => getMaterial(req, res, Material));

// delete a Material
const deleteMaterial = require("../controllers/materials/deleteMaterial");
router.delete("/materials", requireLogin, (req, res) =>
  deleteMaterial(req, res, Material)
);

// edit a Material
const editMaterial = require("../controllers/materials/editMaterial");
router.patch("/materials", requireLogin, (req, res) =>
  editMaterial(req, res, Material)
);

// get a revision questions
const getRevisionQuestions = require("../controllers/revisionQuestions/getRevisionQuestions");
router.get("/revision_questions", (req, res) =>
  getRevisionQuestions(req, res, RevisionQuestions)
);

// create a revision questions
const createRevisionQuestions = require("../controllers/revisionQuestions/createRevisionQuestions");
router.post("/revision_questions", requireLogin, (req, res) =>
  createRevisionQuestions(req, res, RevisionQuestions)
);

// edit a revision questions
const editRevisionQuestions = require("../controllers/revisionQuestions/editRevisionQuestions");
router.patch("/revision_questions", requireLogin, (req, res) =>
  editRevisionQuestions(req, res, RevisionQuestions)
);

// delete a revision questions
const deleteRevisionQuestions = require("../controllers/revisionQuestions/deleteRevisionQuestions");
router.delete("/revision_questions", requireLogin, (req, res) =>
  deleteRevisionQuestions(req, res, RevisionQuestions)
);

// get a marking scheme
const getMarkingScheme = require("../controllers/markingScheme/getMarkingScheme");
router.get("/marking_scheme", (req, res) =>
  getMarkingScheme(req, res, MarkingScheme)
);

// create a marking scheme
const createMarkingScheme = require("../controllers/markingScheme/createMarkingScheme");
router.post("/marking_scheme", requireLogin, (req, res) =>
  createMarkingScheme(req, res, MarkingScheme)
);

// edit a marking scheme
const editMarkingScheme = require("../controllers/markingScheme/editMarkingScheme");
router.patch("/marking_scheme", requireLogin, (req, res) =>
  editMarkingScheme(req, res, MarkingScheme)
);

// delete a marking scheme
const deleteMarkingScheme = require("../controllers/markingScheme/deleteMarkingScheme");
router.delete("/marking_scheme", requireLogin, (req, res) =>
  deleteMarkingScheme(req, res, MarkingScheme)
);

module.exports = router;
