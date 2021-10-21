module.exports = async (req, res, Topic) => {
  const paginateOptions = {
    page: req.query.page,
    limit: 1000,
  };

  await Topic.paginate(
    Topic.find({ subject: req.query.subjectID }),
    paginateOptions,
    (err, topics) => {
      if (err) {
        res.status(500).send({ error: "Failed to fetch Topics" });
      } else {
        if (topics.docs.length > 0) {
          res.status(200).send(topics.docs);
          return;
        } else {
          res.status(200).send(null);
          return;
        }
      }
    }
  );
};
