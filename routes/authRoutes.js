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

// local-login
require("../services/passport");
router.get(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

// google
require("../services/passport");
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});

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
