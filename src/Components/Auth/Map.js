import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./Map.css";

const Map = ({ center, zoom }) => {
  const mapRef = useRef();

  const initialLocation = {
    lat: center?.lat || -34.6156625,
    lng: center?.lng || -58.503338,
  };

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      mapId: process.env.REACT_APP_API_GOOGLE_MAP_KEY,
      center: initialLocation,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: initialLocation, map: map });
  }, [center, zoom]);

  return <div ref={mapRef} className="map" />;
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

export default Map;
