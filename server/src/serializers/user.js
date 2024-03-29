module.exports = (User, passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, { password: 0 }).then((user) => {
      done(null, user);
    });
  });
};
