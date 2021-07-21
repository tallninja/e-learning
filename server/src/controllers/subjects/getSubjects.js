module.exports = async (req, res, Subject) => {
  const paginateOptions = {
    page: req.query.page,
    limit: 1000,
  };

  await Subject.paginate(Subject.find({}), paginateOptions, (err, subjects) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch Subjects" });
    } else {
      if (subjects.docs.length > 0) {
        res.status(200).send(subjects.docs);
        return;
      } else {
        res.status(200).send(null);
        return;
      }
    }
  });
};
