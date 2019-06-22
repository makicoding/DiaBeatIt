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
    const {userName, userDate } = req.query;
    const userDateObj = new Date(userDate);
    const [month, date, year] = [ userDateObj.getMonth(), userDateObj.getDate(), userDateObj.getFullYear()]; 
    db.Calorie
      .find({username: userName, date: {"$gte": new Date(year, month, date), "$lt": new Date(year, month, date+1)}})      //{$and: [{username:req.query.userName},{date:req.query.userDate}]}
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