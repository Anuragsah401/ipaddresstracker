import React from "react";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import classes from "./Map.module.css";

const customIcon = L.icon({
  iconUrl: require("../../Assets/Icons/marker.png"),
  iconSize: 40,
});

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = (props) => {
  const center = [props.lat, props.long];

  return (
    <div className={classes.map}>
      <MapContainer center={center} zoom={13}>
        <ChangeView center={center} zoom={13} />
        <TileLayer
          attribution="IP ADDRESS TRACKER"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
