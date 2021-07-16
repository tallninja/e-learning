module.exports = async (req, res, MarkingScheme) => {
  const { fileURL, materialID, fileName } = req.body;
  await new MarkingScheme({
    materialID: materialID,
    fileURL: fileURL,
    fileName: fileName,
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating Marking Scheme !" });
      return;
    } else {
      res.status(201).send({ success: "Marking Scheme Created Successfully" });
      return;
    }
  });
};
