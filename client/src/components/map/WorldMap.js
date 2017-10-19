import React from 'react';
import {Map, TileLayer} from "react-leaflet";
import CountryLayer from "./CountryLayer";
import OilSpillLayer from "./OilSpillLayer";
import ViewFilterControls from "./ViewFilterControls";
import "./WorldMap.css";

class WorldMap extends React.Component {
  state = {
    lat: 50,
    lng: 0,
    zoom: 3,
    showSpills: true,
    showRigs: true,
  };

  render() {
    return (
      <div style={{width: "100%", height: "100%", display: "relative"}}>
        <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} minZoom={2}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.state.showRigs ?
            <CountryLayer/> :
            undefined
          }
          {this.state.showSpills ?
            <OilSpillLayer/> :
            undefined
          }
        </Map>
        <ViewFilterControls
          showSpills={this.state.showSpills}
          showRigs={this.state.showRigs}
          toggleSpills={() => this.setState({showSpills: !this.state.showSpills})}
          toggleRigs={() => this.setState({showRigs: !this.state.showRigs})}
        />
      </div>
    );
  }
}

export default WorldMap;
