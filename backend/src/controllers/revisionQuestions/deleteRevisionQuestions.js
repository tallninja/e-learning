module.exports = async (req, res, RevisionQuestions) => {
  await RevisionQuestions.deleteOne({
    _id: req.query.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete Revision Questions !" });
      return;
    } else {
      res
        .status(200)
        .send({ success: "Revision Questions deleted successfully !" });
      return;
    }
  });
};
