module.exports = async (req, res, Video) => {
  const { form, subject, topic, ytVideoURL } = req.body;
  await new Video({
    form,
    subject,
    topic,
    ytVideoURL,
  }).save((err) => {
    if (err) {
      res.status(500).json({ error: "Error saving video !" });
      // res.status(500).json({ error: err });
    } else {
      res.status(200).json({ success: "Video created successfully !" });
    }
  });
};
