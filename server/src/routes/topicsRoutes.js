module.exports = (router, requireLogin, requireAdmin, Topic) => {
  const requireAdmin = require("../middlewares/requireAdmin");

  // get all topics
  const getTopics = require("../controllers/topics/getTopics");
  router.get("/topics/all", async (req, res) => getTopics(req, res, Topic));

  // create a topic
  const createTopic = require("../controllers/topics/createTopic");
  router.post("/topics", requireLogin, requireAdmin, (req, res) =>
    createTopic(req, res, Topic)
  );

  // get a single Topic
  const getTopic = require("../controllers/topics/getTopic");
  router.get("/topics/item", (req, res) => getTopic(req, res, Topic));

  // delete a Topic
  const deleteTopic = require("../controllers/topics/deleteTopic");
  router.delete("/topics", requireLogin, requireAdmin, (req, res) =>
    deleteTopic(req, res, Topic)
  );

  // edit a Topic
  const editTopic = require("../controllers/topics/editTopic");
  router.patch("/topics", requireLogin, requireAdmin, (req, res) =>
    editTopic(req, res, Topic)
  );
};
