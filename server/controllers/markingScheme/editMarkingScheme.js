module.exports = async (req, res, MarkingScheme) => {
  await MarkingScheme.updateOne(
    {
      _id: req.query.id,
    },
    {
      content: req.body.content,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Marking Scheme !" });
      return;
    } else {
      res.status(200).send({ success: "Marking Scheme edited successfully !" });
      return;
    }
  });
};