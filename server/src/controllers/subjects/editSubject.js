module.exports = async (req, res, Subject) => {
  const { id, fileURL, name, description, imageURL } = req.body;
  await Subject.updateOne(
    {
      _id: id,
    },
    {
      name: name,
      description: description,
      imageURL: imageURL,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Subject !" });
      return;
    } else {
      res.status(200).send({ success: "Subject edited successfully !" });
      return;
    }
  });
};
