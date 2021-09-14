module.exports = async (req, res, Notes) => {
  const { fileURL, materialID, fileName } = req.body;
  await new Notes({
    materialID: materialID,
    fileURL: fileURL,
    fileName: fileName,
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating Notes !" });
      return;
    } else {
      res.status(201).send({ success: "Notes Created Successfully" });
      return;
    }
  });
};
