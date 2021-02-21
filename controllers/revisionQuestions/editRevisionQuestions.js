module.exports = async (req, res, RevisionQuestions) => {
  await RevisionQuestions.updateOne(
    {
      _id: req.query.id,
    },
    {
      content: req.body.content,
      materialID: req.body.materialID,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Revision Questions !" });
      return;
    } else {
      res
        .status(200)
        .send({ success: "Revision Questions edited successfully !" });
      return;
    }
  });
};
