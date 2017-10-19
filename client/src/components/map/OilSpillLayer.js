import {inject, observer} from "mobx-react";
import React from 'react';
import {FeatureGroup} from "react-leaflet";
import OilSpillMarker from "./OilSpillMarker";
import "./WorldMap.css";

@inject("spillStore")
@observer
class OilSpillLayer extends React.Component {
  render() {
    return (
      <FeatureGroup>
        {this.props.spillStore.spills.map(oilSpill => (
          <OilSpillMarker
            oilSpill={oilSpill}
            key={oilSpill.id}
            {...this.props}
          />
        ))}
      </FeatureGroup>
    );
  }
}

export default OilSpillLayer;
