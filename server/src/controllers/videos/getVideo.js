module.exports = async (req, res, Video) => {
  await Video.findOne({
    topic: req.query.topicID,
  }).exec((err, video) => {
    if (err) {
      res.status(500).json({ error: "Cannot find Video !" });
    } else {
      res.status(200).json(video);
    }
  });
};
