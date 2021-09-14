module.exports = async (req, res, Notes) => {
  const { id, fileURL } = req.body;
  await Notes.updateOne(
    {
      _id: id,
    },
    {
      fileURL: fileURL,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit Notes !" });
      return;
    } else {
      res.status(200).send({ success: "Notes edited successfully !" });
      return;
    }
  });
};
