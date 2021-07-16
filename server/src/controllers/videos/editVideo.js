module.exports = async (req, res, Video) => {
  Video.updateOne(
    {
      _id: req.query.id,
    },
    {
      ytVideoID: req.body.ytVideoID,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).json({ error: "Error editing the video !" });
    } else {
      res.status(200).json({ success: "Video edited Successfully !" });
    }
  });
};
