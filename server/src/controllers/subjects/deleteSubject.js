module.exports = async (req, res, Subject) => {
  await Subject.deleteOne({
    _id: req.query.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete Subject !" });
      return;
    } else {
      res.status(200).send({ success: "Subject deleted successfully !" });
      return;
    }
  });
};
