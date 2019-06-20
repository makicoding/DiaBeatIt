const db = require("../models");

// Defining methods for the calorieController
module.exports = {
  create: function(req, res) {
    db.Calorie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
