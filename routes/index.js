const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");
const express = require("express");

/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      var token = req.user.token;
      var username = req.user.email;
      res.redirect("https://diabeatit-9.herokuapp.com/?token=" + token + "&username=" + username);
  }
);

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
//   console.log("user logged out");
// });

// router.get('/logout', function (req, res){
//   req.session.destroy(function (err) {
//     res.redirect('/'); //Inside a callback… bulletproof!
//   });
// });

router.get('/logout', function(req, res, next) {
  // if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
    console.log("user logged out");
  // 
});

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
