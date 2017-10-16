import React from 'react';
import {FeatureGroup, GeoJSON, Tooltip} from "react-leaflet";
import fetchJSON from "../../api/fetch-json";
import "./WorldMap.css";

class CountryLayer extends React.Component {
  state = {
    countryOilRigs: [],
  };

  async componentDidMount() {
    try {
      const oilRigs = await fetchJSON("/oil-rigs");
      const countriesGeoJSON = await fetchJSON("/data/countries.geo.json");

      const countryOilRigs = [];
      oilRigs.forEach(rigsOfCountry => {
        const geoMatches = countriesGeoJSON.filter(geoCountry =>
          geoCountry.properties.admin.toLowerCase() === rigsOfCountry.countryName.toLowerCase());

        if (geoMatches.length !== 0) {
          geoMatches[0].properties.rigs = rigsOfCountry;
          countryOilRigs.push(geoMatches[0]);
        }
      });
      // TODO derive color categories from sorted list
      countryOilRigs.sort((a, b) => a.properties.rigs.count - b.properties.rigs.count);

      this.setState({countryOilRigs})
    } catch (e) {
      console.error(e);
    }
  }

  render() {

    return (
      <FeatureGroup>
        {this.state.countryOilRigs.map(country => (
          <GeoJSON
            key={country.properties.admin}
            style={{
              color: "rgb(" + 255 * country.properties.rigs.count / 15 + ", 150, 150)",
              stroke: false,
              fillOpacity: 0.4
            }}
            data={country}>
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
