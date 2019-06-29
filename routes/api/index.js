const router = require("express").Router();
const calorieRoutes = require("./calorie");
const healthCardRoutes = require("./healthcard");
const passport = require("passport");
// routes

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
        res.redirect("http://localhost:3000?token=" + token);
    }
);

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

router.use("/calorie", calorieRoutes);
router.use("/healthcard", healthCardRoutes);        

module.exports = router;