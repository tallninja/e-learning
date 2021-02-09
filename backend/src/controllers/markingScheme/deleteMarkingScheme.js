module.exports = async (req, res, MarkingScheme) => {
  await MarkingScheme.deleteOne({
    _id: req.query.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete Marking Scheme !" });
      return;
    } else {
      res
        .status(200)
        .send({ success: "Marking Scheme deleted successfully !" });
      return;
    }
  });
};
