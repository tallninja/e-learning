module.exports = async (User, username, password, done, bcrypt) => {
  const existingUser = await User.findOne({ username: username });

  if (existingUser) {
    const USER_PASSWORD = existingUser.password;
    bcrypt.compare(password, USER_PASSWORD, (error, same) => {
      if (error)
        return done(null, false, {
          message: "Incorret Username or Password !",
        });
      if (same) return done(null, user);
    });
  } else {
    return done(null, false, { message: "Incorret Username or Password !" });
  }
};
