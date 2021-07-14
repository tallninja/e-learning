module.exports = (router, requireLogin, requireAdmin, Notes) => {
  // get a notes
  const getNotes = require("../controllers/notes/getNotes");
  router.get("/notes", (req, res) => getNotes(req, res, Notes));

  // create a notes
  const createNotes = require("../controllers/notes/createNotes");
  router.post("/notes", requireLogin, requireAdmin, (req, res) =>
    createNotes(req, res, Notes)
  );

  // edit a notes
  const editNotes = require("../controllers/notes/editNotes");
  router.patch("/notes", requireLogin, requireAdmin, (req, res) =>
    editNotes(req, res, Notes)
  );

  // delete a notes
  const deleteNotes = require("../controllers/notes/deleteNotes");
  router.delete("/notes", requireLogin, requireAdmin, (req, res) =>
    deleteNotes(req, res, Notes)
  );
};
