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
    .find({username: req.query.name}).sort({ _id: -1 }).limit(1)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.MedId
    .findOneAndUpdate({username: req.body.username}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(
      db.MedId
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    );    //err => res.status(422).json(err)
  }
};

/* 

      db.MedId
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
      */