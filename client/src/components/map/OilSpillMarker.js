import approx from "approximate-number";
import {DomEvent} from "leaflet";
import {inject, observer} from "mobx-react";
import React from 'react';
import {CircleMarker, Tooltip} from "react-leaflet";
import {getSpillName} from "../../util/spill-text";
import "./WorldMap.css";

@inject("spillStore")
@observer
class OilSpillMarker extends React.Component {
  render() {
    return (
      <CircleMarker
        center={{
          lat: parseFloat(this.props.oilSpill.lat),
          lng: parseFloat(this.props.oilSpill.lng),
        }}
        radius={this.props.oilSpill.sizeLog * 30}
        color={this.props.color}
        fillColor={this.props.fillColor}
        fillOpacity={this.props.selectedSpill === this.props.oilSpill.id ? 0.7 : 0.3}
        opacity={this.props.selectedSpill === this.props.oilSpill.id ? 1 : 0.3}
        onClick={(e) => {
          this.props.onSelectSpill(this.props.oilSpill.id);
          DomEvent.stopPropagation(e);
        }}
      >
        <Tooltip>
          <div>
            <strong>{getSpillName(this.props.oilSpill)}</strong><br/>
            {approx(this.props.oilSpill.size)} m<sup>3</sup> of oil spilt<br/>
            <span className="text-muted">{(new Date(Date.parse(this.props.oilSpill.dateTime))).getFullYear()}</span>
          </div>
        </Tooltip>
      </CircleMarker>
    );
  }
}

export default OilSpillMarker;
