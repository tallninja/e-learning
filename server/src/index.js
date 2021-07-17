const path = require("path");
const keys = require("./config/keys");
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

// const sslRedirect = require("heroku-ssl-redirect");

// mongo
const mongoURI = keys.mongo.URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    req.secure ? next() : res.redirect(`https://${req.headers.host}${req.url}`);
  });
}

// sesions and cookies
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSession.key],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// auth
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// api
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
