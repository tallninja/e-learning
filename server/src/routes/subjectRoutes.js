const requireAdmin = require("../middlewares/requireAdmin");

module.exports = (router, requireLogin, requireAdmin, Subject) => {
  // get all subjects
  const getSubjects = require("../controllers/subjects/getSubjects");
  router.get("/subjects/all", async (req, res) =>
    getSubjects(req, res, Subject)
  );

  // create a subjects
  const createSubject = require("../controllers/subjects/createSubject");
  router.post("/subjects", requireLogin, requireAdmin, (req, res) =>
    createSubject(req, res, Subject)
  );

  // get a single subject
  const getSubject = require("../controllers/subjects/getSubject");
  router.get("/subjects/item", (req, res) => getSubject(req, res, Subject));

  // delete a Subject
  const deleteSubject = require("../controllers/subjects/deleteSubject");
  router.delete("/subjects", requireLogin, requireAdmin, (req, res) =>
    deleteSubject(req, res, Subject)
  );

  // edit a Subject
  const editSubject = require("../controllers/subjects/editSubject");
  router.patch("/subjects", requireLogin, requireAdmin, (req, res) =>
    editSubject(req, res, Subject)
  );
};
