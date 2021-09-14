module.exports = async (req, res, RevisionQuestions) => {
  const { id, fileURL } = req.body;
  await RevisionQuestions.updateOne(
    {
      _id: id,
    },
    {
      fileURL: fileURL,
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
