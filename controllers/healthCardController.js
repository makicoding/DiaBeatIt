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
    console.log(req.query.name)
    db.MedId
    .find({username: req.query.name}).sort({ _id: -1 }).limit(1)
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