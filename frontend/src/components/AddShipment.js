import React, { useState } from "react";
import axios from "axios";

function AddShipment() {
  const [shipment, setShipment] = useState({
    shipmentId: "",
    containerId: "",
    route: "",
    currentLocation: "",
    eta: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setShipment({ ...shipment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...shipment,
      route: shipment.route.split(",").map(r => r.trim())
    };
    try {
      await axios.post("http://localhost:5000/api/shipments", payload);
      alert("Shipment added successfully!");
      window.location.href = "/";
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Shipment ID</label>
          <input className="form-control" name="shipmentId" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Container ID</label>
          <input className="form-control" name="containerId" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Route (comma-separated locations like lat,long)</label>
          <input className="form-control" name="route" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Current Location</label>
          <input className="form-control" name="currentLocation" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>ETA (date/time)</label>
          <input type="datetime-local" className="form-control" name="eta" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Status</label>
          <select className="form-control" name="status" onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default AddShipment;
