module.exports = async (req, res, Notes) => {
  await Notes.findOne({ topic: req.query.topic }).exec((err, notes) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch the Notes !" });
    } else {
      res.status(200).send(notes);
    }
  });
};
