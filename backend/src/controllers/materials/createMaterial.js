module.exports = async (req, res, Material) => {
  const { subject, title, content } = req.body;
  await new Material({
    subject: subject,
    title: title,
    content: content,
    _user: req.user.id,
    author: req.user.displayName,
    avatarURL: req.user.profileImage,
    dateCreated: new Date(),
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating Material !" });
      return;
    } else {
      res.status(201).send({ success: "Material Created Successfully" });
      return;
    }
  });
};
