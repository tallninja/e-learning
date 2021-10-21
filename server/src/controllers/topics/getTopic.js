module.exports = async (req, res, Topic) => {
  await Topic.findOne({ _id: req.query.id }).exec((err, topic) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch the Topic !" });
      return;
    } else {
      res.status(200).send(topic);
      return;
    }
  });
};
