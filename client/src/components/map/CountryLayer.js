import {inject, observer} from "mobx-react";
import React from 'react';
import {FeatureGroup, GeoJSON, Tooltip} from "react-leaflet";
import "./WorldMap.css";

@inject("countryRigStore")
@observer
class CountryLayer extends React.Component {
  render() {
    return (
      <FeatureGroup>
        {this.props.countryRigStore.countryOilRigs.map(country => (
          <GeoJSON
            key={country.properties.admin}
            style={{
              color: "rgb(" + 255 * country.properties.rigs.count / 15 + ", 150, 150)",
              stroke: false,
              fillOpacity: 0.4
            }}
            data={country}
          >
            <Tooltip>
              <div>
                <strong>{country.properties.admin}</strong><br/>
                {country.properties.rigs.count} offshore oil rig(s)<br/>
                <small>Data from {country.properties.rigs.year}</small>
              </div>
            </Tooltip>
          </GeoJSON>
        ))}
      </FeatureGroup>
    );
  }
}

export default CountryLayer;
