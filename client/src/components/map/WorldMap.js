import React from 'react';
import {Map, TileLayer} from "react-leaflet";
import CountryLayer from "./CountryLayer";
import OilSpillLayer from "./OilSpillLayer";
import "./WorldMap.css";

class WorldMap extends React.Component {
  state = {
    lat: 50,
    lng: 0,
    zoom: 3
  };

  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} minZoom={2}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <CountryLayer/>
          <OilSpillLayer/>
        </Map>
      </div>
    );
  }
}

export default WorldMap;
