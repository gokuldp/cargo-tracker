const Shipment = require("../models/Shipment");

// Create Shipment
exports.createShipment = async (req, res) => {
  try {
    const shipment = new Shipment(req.body);
    await shipment.save();
    res.status(201).json(shipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Shipments
exports.getAllShipments = async (req, res) => {
  const shipments = await Shipment.find();
  res.json(shipments);
};

// Get Shipment by ID
exports.getShipmentById = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);
  res.json(shipment);
};

// Update Location
exports.updateLocation = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);
  shipment.currentLocation = req.body.currentLocation;
  await shipment.save();
  res.json(shipment);
};

// Get ETA
exports.getETA = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);
  res.json({ eta: shipment.eta });
};
