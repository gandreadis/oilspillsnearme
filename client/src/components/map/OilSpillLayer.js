import {inject, observer} from "mobx-react";
import React from 'react';
import {FeatureGroup} from "react-leaflet";
import OilSpillMarker from "./OilSpillMarker";

@inject("spillStore")
@observer
class OilSpillLayer extends React.Component {
  render() {
    const nearestSpills = this.props.spillStore.getNearestSpills();

    return (
      <FeatureGroup>
        {this.props.spillStore.spills
          .map(oilSpill => (
          <OilSpillMarker
            oilSpill={oilSpill}
            key={oilSpill.id}
            color={(!this.props.locationIsShared || nearestSpills.indexOf(oilSpill.id) === -1) ? "red" : "blue"}
            fillColor={(!this.props.locationIsShared || nearestSpills.indexOf(oilSpill.id) === -1) ? "#f03" : "#03f"}
            {...this.props}
          />
        ))}
      </FeatureGroup>
    );
  }
}

export default OilSpillLayer;
