module.exports = (router, requireLogin, requireAdmin, Video) => {
  // get video
  const getVideo = require("../controllers/videos/getVideo");
  router.get("/video", requireLogin, (req, res) => {
    getVideo(req, res, Video);
  });

  // create video
  const createVideo = require("../controllers/videos/createVideo");
  router.post("/video", requireLogin, requireAdmin, (req, res) => {
    createVideo(req, res, Video);
  });

  // edit video
  const editVideo = require("../controllers/videos/editVideo");
  router.patch("/video", requireLogin, requireAdmin, (req, res) => {
    editVideo(req, res, Video);
  });

  // delete video
  const deleteVideo = require("../controllers/videos/deleteVideo");
  router.delete("/video", requireLogin, requireAdmin, (req, res) => {
    deleteVideo(req, res, Video);
  });
};
