const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  shipmentId: { type: String, required: true, unique: true },
  containerId: { type: String, required: true },
  route: [{ type: String }],
  currentLocation: { type: String },
  eta: { type: Date },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Shipment", shipmentSchema);
