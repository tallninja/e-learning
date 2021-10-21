module.exports = async (req, res, RevisionQuestions) => {
  const { form, subject, topic, fileURL, fileName } = req.body;
  await new RevisionQuestions({
    form,
    subject,
    topic,
    fileURL,
    fileName,
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: err });
      return;
    } else {
      res
        .status(201)
        .send({ success: "Revision Questions Created Successfully" });
      return;
    }
  });
};
