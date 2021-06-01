module.exports = async (req, res, Video) => {
  const { materialID, ytVideoID } = req.body;
  await new Video({
    materialID: materialID,
    ytVideoID: ytVideoID,
  }).save((err) => {
    if (err) {
      res.status(500).json({ error: "Error saving video !" });
      // res.status(500).json({ error: err });
    } else {
      res.status(200).json({ success: "Video created successfully !" });
    }
  });
};
