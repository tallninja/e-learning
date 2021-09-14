module.exports = async (req, res, Material) => {
  await Material.findOne({ _id: req.query.id }).exec((err, blog) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch the Material !" });
      return;
    } else {
      res.status(200).send(blog);
      return;
    }
  });
};
