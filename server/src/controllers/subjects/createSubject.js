module.exports = async (req, res, Subject) => {
  const { name, description, imageURL } = req.body;
  await new Subject({
    name: name,
    description: description,
    imageURL: imageURL,
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating Subject !" });
      return;
    } else {
      res.status(201).send({ success: "Subject Created Successfully" });
      return;
    }
  });
};
