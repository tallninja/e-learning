module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(201).json({ status: 201, message: "Login required !" });
  }
};
