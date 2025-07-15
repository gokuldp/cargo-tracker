const express = require("express");
const router = express.Router();
const controller = require("../controllers/shipmentController");

router.post("/", controller.createShipment);
router.get("/", controller.getAllShipments);
router.get("/:id", controller.getShipmentById);
router.post("/:id/update-location", controller.updateLocation);
router.get("/:id/eta", controller.getETA);

module.exports = router;
