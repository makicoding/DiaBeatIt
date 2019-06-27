const db = require("../models");
// Defining methods for the calorieController
module.exports = {
  create: function(req, res) {
    db.MedId
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) { 
    db.MedId
    .find({username: userName})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.MedId
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
