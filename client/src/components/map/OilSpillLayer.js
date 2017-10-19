import approx from "approximate-number";
import {inject, observer} from "mobx-react";
import React from 'react';
import {CircleMarker, FeatureGroup, Tooltip} from "react-leaflet";
import "./WorldMap.css";

@inject("spillStore")
@observer
class OilSpillLayer extends React.Component {
  render() {
    return (
      <FeatureGroup>
        {this.props.spillStore.spills.map((oilSpill, index) => (
          <CircleMarker
            center={{
              lat: oilSpill.lat,
              lng: oilSpill.lng,
            }}
            radius={oilSpill.sizeTonnes / 5000}
            color="red"
            fillColor="#f03"
            key={index}
          >
            <Tooltip>
              <div>
                <strong>{oilSpill.name}</strong><br/>
                On {oilSpill.date}<br/>
                {approx(oilSpill.sizeTonnes)} tonnes of oil spilt<br/>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </FeatureGroup>
    );
  }
}

export default OilSpillLayer;
