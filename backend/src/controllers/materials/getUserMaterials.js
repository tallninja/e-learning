module.exports = async (req, res, Material) => {
  const paginateOptions = {
    page: req.query.page,
    limit: 10,
  };

  await Material.paginate(
    Material.find({ _user: req.user.id }),
    paginateOptions,
    (err, materials) => {
      if (err) {
        res.status(500).send({ error: "Could Not Fetch materials !" });
      } else {
        if (materials.docs.length > 0) {
          res.status(200).send(materials.docs);
          return;
        } else {
          res.send(null);
          return;
        }
      }
    }
  );
};
