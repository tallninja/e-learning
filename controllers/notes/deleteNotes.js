module.exports = async (req, res, Notes) => {
  await Notes.deleteOne({
    _id: req.query.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete Notes !" });
      return;
    } else {
      res.status(200).send({ success: "Notes deleted successfully !" });
      return;
    }
  });
};
