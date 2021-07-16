module.exports = async (req, res, Video) => {
  const { materialID, ytVideoURL } = req.body;
  await new Video({
    materialID: materialID,
    ytVideoURL: ytVideoURL,
  }).save((err) => {
    if (err) {
      res.status(500).json({ error: "Error saving video !" });
      // res.status(500).json({ error: err });
    } else {
      res.status(200).json({ success: "Video created successfully !" });
    }
  });
};
