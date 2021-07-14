module.exports = (router, requireLogin, requireAdmin, MarkingScheme) => {
  // get a marking scheme
  const getMarkingScheme = require("../controllers/markingScheme/getMarkingScheme");
  router.get("/marking_scheme", (req, res) =>
    getMarkingScheme(req, res, MarkingScheme)
  );

  // create a marking scheme
  const createMarkingScheme = require("../controllers/markingScheme/createMarkingScheme");
  router.post("/marking_scheme", requireLogin, requireAdmin, (req, res) =>
    createMarkingScheme(req, res, MarkingScheme)
  );

  // edit a marking scheme
  const editMarkingScheme = require("../controllers/markingScheme/editMarkingScheme");
  router.patch("/marking_scheme", requireLogin, requireAdmin, (req, res) =>
    editMarkingScheme(req, res, MarkingScheme)
  );

  // delete a marking scheme
  const deleteMarkingScheme = require("../controllers/markingScheme/deleteMarkingScheme");
  router.delete("/marking_scheme", requireLogin, requireAdmin, (req, res) =>
    deleteMarkingScheme(req, res, MarkingScheme)
  );
};
