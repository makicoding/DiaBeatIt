const router = require("express").Router();
const calorieController = require("../../controllers/calorieController");

// Matches with "/api/calorie"
router.route("/")
  .post(calorieController.create)
  .get(calorieController.findMany);

// Matches with "/api/books/:id"
router
.route("/:id")
.delete(calorieController.remove)
.put(calorieController.update);

module.exports = router;
