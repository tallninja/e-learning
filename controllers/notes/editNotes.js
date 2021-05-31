module.exports = async (req, res, Notes) => {
  await Notes.updateOne(
    {
      _id: req.query.id,
    },
    {
      content: req.body.content,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Notes !" });
      return;
    } else {
      res.status(200).send({ success: "Notes edited successfully !" });
      return;
    }
  });
};
