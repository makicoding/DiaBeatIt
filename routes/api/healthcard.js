const router = require("express").Router();
const healthCardController = require("../../controllers/healthCardController");

// Matches with "/api/calorie"
router.route("/")
  .post(healthCardController.create)
  .get(healthCardController.findOne);


module.exports = router;

  