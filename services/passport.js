const keys = require("../config/keys");
const bcrypt = require("bcrypt");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");

const saveUser = require("../controllers/auth/saveUser");
const loginUser = require("../controllers/auth/loginUser");
const User = mongoose.model("users");
require("../serializers/user")(User, passport);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      saveUser(User, profile, done);
      // console.log(profile);
    }
  )
);

passport.use(
  new LocalStrategy((username, password, done) => {
    loginUser(User, username, password, done, bcrypt);
  })
);
