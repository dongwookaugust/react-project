import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./RevenueByLocationMap.css";

const locations = [
  { name: "Newyork", coords: [40.7128, -74.006] },
  { name: "San Francisco", coords: [37.7749, -122.4194] },
  { name: "Sydney", coords: [-33.8688, 151.2093] },
  { name: "Singapore", coords: [1.3521, 103.8198] },
];

const mapCenter: [number, number] = [20, 0];
const zoomLevel = 1;

const RevenueLocationMap = () => {
  return (
    <div className="location-map">
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel}
        style={{ height: "95%", width: "100%" }}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker key={index} position={location.coords}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default RevenueLocationMap;
