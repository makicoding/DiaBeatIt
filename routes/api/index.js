const router = require("express").Router();
const calorieRoutes = require("./calorie");

// Book routes
router.use("/calorie", calorieRoutes);

module.exports = router;
