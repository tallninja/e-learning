module.exports = async (req, res, RevisionQuestions) => {
  const { fileURL, materialID, fileName } = req.body;
  await new RevisionQuestions({
    materialID: materialID,
    fileURL: fileURL,
    fileName: fileName,
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
