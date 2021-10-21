module.exports = async (req, res, RevisionQuestions) => {
  await RevisionQuestions.findOne({ topic: req.query.topicID }).exec(
    (err, revisionQuestions) => {
      if (err) {
        res
          .status(500)
          .send({ error: "Failed to fetch the Revision Questions !" });
        return;
      } else {
        res.status(200).send(revisionQuestions);
        return;
      }
    }
  );
};
