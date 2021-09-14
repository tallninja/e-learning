module.exports = async (req, res, Subject) => {
  await Subject.findOne({ _id: req.query.id }).exec((err, notes) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch the Subject !" });
    } else {
      res.status(200).send(notes);
    }
  });
};
