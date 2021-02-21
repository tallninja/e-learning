module.exports = async (req, res, Material) => {
  const material = await Material.deleteOne({
    _id: req.query.id,
    _user: req.user.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete Material !" });
      return;
    } else {
      res.status(200).send({ success: "Material deleted successfully !" });
      return;
    }
  });
};
