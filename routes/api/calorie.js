const router = require("express").Router();
const calorieController = require("../../controllers/calorieController");

// Matches with "/api/calorie"
router.route("/")
  .post(calorieController.create);

// Matches with "/api/books/:id"
router
.route("/:id")
.get(calorieController.findMany)
.delete(calorieController.remove);

module.exports = router;
