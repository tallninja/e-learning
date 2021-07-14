module.exports = async (req, res, Video) => {
  await Video.deleteOne({
    _id: req.query.id,
  }).exec((err) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete Video !" });
    } else {
      res.status(200).json({ success: "Video deleted successfully" });
    }
  });
};
