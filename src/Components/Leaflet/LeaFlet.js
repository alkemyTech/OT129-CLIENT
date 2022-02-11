import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import "./leaflet.css";
import ErrorHandler from "./ErrorHandler";
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

const defaultTheme = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
const darkTheme = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);
let theme = defaultTheme;

const LeaFlet = ({ address, position, dark, height }) => {
  L.Marker.prototype.options.icon = DefaultIcon;

  if (dark) {
    theme = darkTheme;
  }

  return (
    <div>
      <MapContainer center={position} maxZoom={theme.maxZoom} style={{ height }} zoom={13}>
        <ErrorHandler />
        <TileLayer attribution={theme.attribution} url={theme._url} />
        <Marker position={position}>
          <Popup>
            Ubicación: <br /> {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

LeaFlet.propTypes = {
  dark: PropTypes.bool,
  address: PropTypes.string.isRequired,
  position: PropTypes.array.isRequired,
  height: PropTypes.string,
};
LeaFlet.defaultProps = {
  dark: false,
  address: "",
  position: [0, 0],
};

export default LeaFlet;
