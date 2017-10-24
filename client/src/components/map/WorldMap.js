import React from 'react';
import {Map, TileLayer} from "react-leaflet";
import CountryLayer from "./CountryLayer";
import LocationControl from "./LocationControl";
import MyCurrentLocationMarker from "./MyCurrentLocationMarker";
import OilSpillLayer from "./OilSpillLayer";
import OilSpillSidebar from "./OilSpillSidebar";
import ViewFilterControls from "./ViewFilterControls";

class WorldMap extends React.Component {
  state = {
    lat: 50,
    lng: 0,
    zoom: 3,
    selectedSpill: undefined,
    locationIsShared: false,
    showSpills: true,
    showRigs: false,
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
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          minZoom={2}
          onClick={(e) => this.setState({selectedSpill: undefined})}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.state.showRigs ?
            <CountryLayer/> :
            undefined
          }
          {this.state.showSpills ?
            <OilSpillLayer
              selectedSpill={this.state.selectedSpill}
              onSelectSpill={id => this.setState({selectedSpill: id})}
              locationIsShared={this.state.locationIsShared}
            /> :
            undefined
          }
          {this.state.locationIsShared ?
            <MyCurrentLocationMarker/> :
            undefined
          }
        </Map>

        <LocationControl
          locationIsShared={this.state.locationIsShared}
          toggleLocationIsShared={() => this.setState({locationIsShared: !this.state.locationIsShared})}
        />
        <ViewFilterControls
          showSpills={this.state.showSpills}
          showRigs={this.state.showRigs}
          toggleSpills={() => this.setState({showSpills: !this.state.showSpills})}
          toggleRigs={() => this.setState({showRigs: !this.state.showRigs})}
        />
        {this.state.selectedSpill !== undefined ?
          <OilSpillSidebar
            spillId={this.state.selectedSpill}
            onClose={() => this.setState({selectedSpill: undefined})}
          /> :
          undefined
        }
      </div>
    );
  }
}

export default WorldMap;
