module.exports = (router, requireLogin, requireAdmin, RevisionQuestions) => {
  // get a revision questions
  const getRevisionQuestions = require("../controllers/revisionQuestions/getRevisionQuestions");
  router.get("/revision_questions", (req, res) =>
    getRevisionQuestions(req, res, RevisionQuestions)
  );

  // create a revision questions
  const createRevisionQuestions = require("../controllers/revisionQuestions/createRevisionQuestions");
  router.post("/revision_questions", requireLogin, requireAdmin, (req, res) =>
    createRevisionQuestions(req, res, RevisionQuestions)
  );

  // edit a revision questions
  const editRevisionQuestions = require("../controllers/revisionQuestions/editRevisionQuestions");
  router.patch("/revision_questions", requireLogin, requireAdmin, (req, res) =>
    editRevisionQuestions(req, res, RevisionQuestions)
  );

  // delete a revision questions
  const deleteRevisionQuestions = require("../controllers/revisionQuestions/deleteRevisionQuestions");
  router.delete("/revision_questions", requireLogin, requireAdmin, (req, res) =>
    deleteRevisionQuestions(req, res, RevisionQuestions)
  );
};
