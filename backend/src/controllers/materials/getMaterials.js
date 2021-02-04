module.exports = async (req, res, Material) => {
  const paginateOptions = {
    page: req.query.page,
    limit: 10,
  };

  await Material.paginate(
    Material.find({}),
    paginateOptions,
    (err, materials) => {
      if (err) {
        res.status(500).send({ error: "Failed to fetch Materials" });
      } else {
        if (materials.docs.length > 0) {
          res.status(200).send(materials);
          return;
        } else {
          res.status(200).send(null);
          return;
        }
      }
    }
  );
};
