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
              color: "rgb(71, 50, 32)",
              stroke: false,
              fillOpacity: country.properties.rigs.countLog * 0.7,
              strokeOpacity: country.properties.rigs.countLog * 0.7
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
