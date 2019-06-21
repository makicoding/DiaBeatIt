const db = require("../models");

// Defining methods for the calorieController
module.exports = {
  create: function(req, res) {
    db.Calorie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMany: function(req, res) { 
    db.Calorie
      .find({username: "Guest User"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Calorie
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// {username:+query.userName},{date:query.userDate}
// .find({ username: req.params.id })
// .find({ username: new RegExp(req.params.id, 'i') })