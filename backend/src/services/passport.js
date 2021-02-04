const config = require("config");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");

const saveUser = require("../controllers/auth/saveUser");
const User = mongoose.model("users");
require("../serializers/user")(User, passport);

const google = () =>
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.get("google.clientID"),
        clientSecret: config.get("google.clientSecret"),
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        saveUser(User, profile, done);
        // console.log(profile);
      }
    )
  );

module.exports = { github, google };
