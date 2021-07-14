module.exports = async (User, req, res, bcrypt) => {
  const { school, subCounty, email, username, password } = req.body;
  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    res
      .status(409)
      .send({ message: "A user with that username already exists !" });
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      new User({
        school,
        subCounty,
        email,
        username,
        password: hash,
      }).save((err) => {
        if (err) console.log(err);
        res.status(200).redirect("/login");
      });
    });
  }
};
