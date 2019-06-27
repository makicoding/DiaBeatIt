const router = require("express").Router();
const calorieRoutes = require("./calorie");
const healthCardRoutes = require("./healthcard");
// routes
router.use("/calorie", calorieRoutes);
router.use("/healthcard", healthCardRoutes);        

module.exports = router;