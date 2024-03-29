const bcrypt = require("bcrypt");
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");

const router = express.Router();

require("../models/User");

// create-user
const User = mongoose.model("users");
router.post("/create_user", (req, res) => {
  require("../controllers/auth/createUser")(User, req, res, bcrypt);
});

// check user authentication
router.get("/status", (req, res) => {
  if (req.user) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

// local-login
require("../services/passport");
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (e, user, info) => {
    if (e) {
      return next(e);
    }
    if (info) {
      return res.send(info);
    }
    req.logIn(user, (e) => {
      if (e) {
        return next(e);
      }
      return res.send({ login: true });
    });
  })(req, res, next);
});

// // google
// require("../services/passport");
// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );
// router.get("/google/callback", passport.authenticate("google"), (req, res) => {
//   res.redirect("/");
// });

// get current user
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

// logout user
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
