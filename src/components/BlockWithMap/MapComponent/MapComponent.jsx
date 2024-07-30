import { useState, useEffect } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import s from "./mapComponent.module.scss";
import "./leafletStyles.scss";
import "leaflet/dist/leaflet.css";

// markers

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

export default function MapComponent() {
  const [userPosition, setUserPosition] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error obtaining position:", error);
            setError(error.message);
          }
        );
      } else {
        setError("Геолокація не підтримується цим браузером.");
      }
    }

    getLocation();
  }, []);

  return (
    <div className={s.map}>
      {userPosition ? (
        <MapContainer center={userPosition} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            <Marker position={userPosition}>
              <Popup>Your location.</Popup>
            </Marker>
          </MarkerClusterGroup>
        </MapContainer>
      ) : (
        <p className={s.loadingMap}>Loading map...</p>
      )}
    </div>
  );
}
