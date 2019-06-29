const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function(user, done) {
 done(null, user);
});

passport.deserializeUser(function(user, done) {
 done(null, user);

});

passport.use(
 new GoogleStrategy(
  {
   clientID: "683331518631-p31hgnaonk7pgb4q9qm1jj6vetc8m4rl.apps.googleusercontent.com",
   clientSecret: "izRFsoXNYwjDGVot_591B0KL",
   callbackURL: "https://diabeatit-9.herokuapp.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
   console.log(userData);
  }
 )
);

// app.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
//   });
