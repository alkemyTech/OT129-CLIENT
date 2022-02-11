import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import "./leaflet.css";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
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

const LeaFlet = ({ dark }) => {
  L.Marker.prototype.options.icon = DefaultIcon;

  if (dark) {
    theme = darkTheme;
  }

  return (
    <div style={{ height: "40vh" }}>
      <MapContainer center={[51.505, -0.09]} maxZoom={theme.maxZoom} zoom={13}>
        <TileLayer attribution={theme.attribution} url={theme._url} />
        <Marker position={[51.51, -0.12]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

LeaFlet.propTypes = {
  dark: PropTypes.bool,
};
LeaFlet.defaultProps = {
  dark: false,
};

export default LeaFlet;
