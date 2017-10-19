import approx from "approximate-number";
import {DomEvent} from "leaflet";
import {inject, observer} from "mobx-react";
import React from 'react';
import {CircleMarker, Tooltip} from "react-leaflet";
import "./WorldMap.css";

@inject("spillStore")
@observer
class OilSpillMarker extends React.Component {
  render() {
    return (
      <CircleMarker
        center={{
          lat: this.props.oilSpill.lat,
          lng: this.props.oilSpill.lng,
        }}
        radius={this.props.oilSpill.sizeTonnes / 5000}
        color="red"
        fillColor="#f03"
        fillOpacity={this.props.selectedSpill === this.props.oilSpill.id ? 0.7 : 0.3}
        opacity={this.props.selectedSpill === this.props.oilSpill.id ? 1 : 0.3}
        onClick={(e) => {
          this.props.onSelectSpill(this.props.oilSpill.id);
          DomEvent.stopPropagation(e);
        }}
      >
        <Tooltip>
          <div>
            <strong>{this.props.oilSpill.name}</strong><br/>
            On {this.props.oilSpill.date}<br/>
            {approx(this.props.oilSpill.sizeTonnes)} tonnes of oil spilt<br/>
          </div>
        </Tooltip>
      </CircleMarker>
    );
  }
}

export default OilSpillMarker;
