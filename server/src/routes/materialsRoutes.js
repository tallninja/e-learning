const requireAdmin = require("../middlewares/requireAdmin");

module.exports = (router, requireLogin, requireAdmin, Material) => {
  // get all materials
  const getMaterials = require("../controllers/materials/getMaterials");
  router.get("/materials/all", async (req, res) =>
    getMaterials(req, res, Material)
  );

  // create a material
  const createMaterial = require("../controllers/materials/createMaterial");
  router.post("/materials", requireLogin, requireAdmin, (req, res) =>
    createMaterial(req, res, Material)
  );

  // get a single Material
  const getMaterial = require("../controllers/materials/getMaterial");
  router.get("/materials/item", (req, res) => getMaterial(req, res, Material));

  // delete a Material
  const deleteMaterial = require("../controllers/materials/deleteMaterial");
  router.delete("/materials", requireLogin, requireAdmin, (req, res) =>
    deleteMaterial(req, res, Material)
  );

  // edit a Material
  const editMaterial = require("../controllers/materials/editMaterial");
  router.patch("/materials", requireLogin, requireAdmin, (req, res) =>
    editMaterial(req, res, Material)
  );
};
