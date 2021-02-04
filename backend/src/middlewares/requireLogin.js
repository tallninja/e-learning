module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(201).send({ status: 201, message: "Login required !" });
  }
};
