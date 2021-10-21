module.exports = async (req, res, Topic) => {
  await Topic.updateOne(
    {
      _id: req.query.id,
    },
    {
      title: req.body.title,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Topic !" });
      return;
    } else {
      res.status(200).send({ success: "Topic edited successfully !" });
      return;
    }
  });
};
