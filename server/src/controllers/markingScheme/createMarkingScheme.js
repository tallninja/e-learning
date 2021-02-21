module.exports = async (req, res, MarkingScheme) => {
  const { content, materialID } = req.body;
  await new MarkingScheme({
    materialID: materialID,
    content: content,
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
