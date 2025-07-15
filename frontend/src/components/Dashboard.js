import React, { useEffect, useState } from "react";
import axios from "axios";
import MapView from "./MapView";

function Dashboard() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/shipments")
      .then((res) => setShipments(res.data))
      .catch((err) => console.error("Failed to fetch shipments:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Cargo Shipments Dashboard</h2>
      <a href="/add" className="btn btn-primary mb-3">Add Shipment</a>
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Container ID</th>
            <th>Current Location</th>
            <th>ETA</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s) => (
            <tr key={s._id}>
              <td>{s.shipmentId}</td>
              <td>{s.containerId}</td>
              <td>{s.currentLocation}</td>
              <td>{new Date(s.eta).toLocaleString()}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {shipments.length > 0 && (
        <>
          <h4>Map View (First Shipment)</h4>
          <MapView
            route={shipments[0].route}
            currentLocation={shipments[0].currentLocation}
          />
        </>
      )}
    </div>
  );
}

export default Dashboard;
