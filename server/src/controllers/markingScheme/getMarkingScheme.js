module.exports = async (req, res, MarkingScheme) => {
  await MarkingScheme.findOne({ materialID: req.query.materialID }).exec(
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
