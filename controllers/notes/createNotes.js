module.exports = async (req, res, Notes) => {
  const { content, materialID } = req.body;
  await new Notes({
    materialID: materialID,
    content: content,
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
