module.exports = async (req, res, Material) => {
  await Material.updateOne(
    {
      _id: req.query.id,
    },
    {
      subject: req.body.subject,
      title: req.body.title,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Material !" });
      return;
    } else {
      res.status(200).send({ success: "Material edited successfully !" });
      return;
    }
  });
};
