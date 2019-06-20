const router = require("express").Router();
const calorieController = require("../../controllers/calorieController");

// Matches with "/api/calorie"
router.route("/")
  .post(calorieController.create);

module.exports = router;
