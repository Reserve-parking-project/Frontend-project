import { useState, useEffect } from 'react';

import MapComponent from "../MapComponent/MapComponent.jsx"

const MapBlock = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [error, setError] = useState('');

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
            console.error('Error obtaining position:', error);
            setError(error.message);
          }
        );
      } else {
        setError('Геолокація не підтримується цим браузером.');
      }
    }

    getLocation();
  }, []);

  return <MapComponent userPosition={userPosition} />;
};

export default MapBlock;
