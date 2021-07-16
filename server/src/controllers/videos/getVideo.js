module.exports = async (req, res, Video) => {
  await Video.findOne({
    materialID: req.query.materialID,
  }).exec((err, video) => {
    if (err) {
      res.status(500).json({ error: "Cannot find Video !" });
    } else {
      res.status(200).json(video);
    }
  });
};
