module.exports = async (req, res, Notes) => {
  await Notes.findOne({ materialID: req.query.materialID }).exec(
    (err, notes) => {
      if (err) {
        res.status(500).send({ error: "Failed to fetch the Notes !" });
        return;
      } else {
        res.status(200).send(notes);
        return;
      }
    }
  );
};
