module.exports = async (req, res, Notes) => {
  const { form, subject, topic, fileURL, fileName } = req.body;
  await new Notes({
    form,
    subject,
    topic,
    fileURL,
    fileName,
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
