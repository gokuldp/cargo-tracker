import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapView({ route, currentLocation }) {
  const coords = route.map(r => r.split(',').map(Number));  
  const current = currentLocation.split(',').map(Number);   

  return (
    <div style={{ height: "400px", marginTop: "20px" }}>
      <MapContainer center={current} zoom={7} scrollWheelZoom={true} style={{ height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coords.map((pos, i) => (
          <Marker key={i} position={pos}>
            <Popup>Checkpoint {i + 1}: {pos.join(',')}</Popup>
          </Marker>
        ))}
        <Polyline positions={coords} color="blue" />
        <Marker position={current}>
          <Popup>📍 Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;
