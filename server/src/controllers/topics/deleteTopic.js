module.exports = async (req, res, Topic) => {
  const Topic = await Topic.deleteOne({
    _id: req.query.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete Topic !" });
      return;
    } else {
      res.status(200).send({ success: "Topic deleted successfully !" });
      return;
    }
  });
};
