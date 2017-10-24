import {inject, observer} from "mobx-react";
import React from 'react';
import {Map, Marker, TileLayer, Tooltip} from "react-leaflet";
import OilSpillMarker from "./OilSpillMarker";

@inject("singleSpillStore")
@observer
class BeachMap extends React.Component {
  state = {
    zoom: 3,
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "relative",
        }}
      >
        <Map
          center={[
            parseFloat(this.props.singleSpillStore.spill.countryLat),
            parseFloat(this.props.singleSpillStore.spill.countryLng)
          ]}
          zoom={this.state.zoom}
          minZoom={2}
          ref={map => this.map = map}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[
              parseFloat(this.props.singleSpillStore.spill.countryLat),
              parseFloat(this.props.singleSpillStore.spill.countryLng)
            ]}
            opacity={0.5}
          >
            <Tooltip>
              <div>
                <strong>{this.props.singleSpillStore.spill.countryName}</strong><br/>
                <span>Country closest to oil spill</span>
              </div>
            </Tooltip>
          </Marker>
          <OilSpillMarker
            oilSpill={this.props.singleSpillStore.spill}
            color="red"
            fillColor="#f03"
          />
          {this.props.singleSpillStore.beaches.map((beach, index) => (
            <Marker
              position={[parseFloat(beach.lat), parseFloat(beach.lng)]}
              key={index}
            >
              <Tooltip>
                <div>
                  <strong>{beach.name}</strong><br/>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </Map>
      </div>
    );
  }
}

export default BeachMap;
