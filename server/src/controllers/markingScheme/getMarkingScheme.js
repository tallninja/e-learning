module.exports = async (req, res, MarkingScheme) => {
  await MarkingScheme.findOne({ topic: req.query.topicID }).exec(
    (err, markingScheme) => {
      if (err) {
        res.status(500).send({ error: "Failed to fetch the Marking Scheme !" });
        return;
      } else {
        res.status(200).send(markingScheme);
        return;
      }
    }
  );
};
