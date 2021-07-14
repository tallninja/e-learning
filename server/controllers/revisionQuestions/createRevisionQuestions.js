module.exports = async (req, res, RevisionQuestions) => {
  const { content, materialID } = req.body;
  await new RevisionQuestions({
    materialID: materialID,
    content: content,
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating Revision Questions !" });
      return;
    } else {
      res
        .status(201)
        .send({ success: "Revision Questions Created Successfully" });
      return;
    }
  });
};
