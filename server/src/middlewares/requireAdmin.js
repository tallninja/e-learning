module.exports = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res
      .status(201)
      .json({ status: 200, message: "Admin Privilleges required !" });
  }
};
