module.exports = async (req, res, Topic) => {
  const { form, subject, title } = req.body;
  await new Topic({
    form,
    subject,
    title,
    _user: req.user.id,
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating Topic !" });
      return;
    } else {
      res.status(201).send({ success: "Topic Created Successfully" });
      return;
    }
  });
};
