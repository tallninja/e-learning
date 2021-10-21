module.exports = async (req, res, MarkingScheme) => {
  const { form, subject, topic, fileURL, fileName } = req.body;
  await new MarkingScheme({
    form,
    subject,
    topic,
    fileURL,
    fileName,
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
