import approx from "approximate-number";
import React from 'react';
import {CircleMarker, FeatureGroup, Tooltip} from "react-leaflet";
import fetchJSON from "../../api/fetch-json";
import "./WorldMap.css";

class OilSpillLayer extends React.Component {
  state = {
    oilSpills: [],
  };

  async componentDidMount() {
    try {
      this.setState({oilSpills: await fetchJSON("/oil-spills")})
    } catch (e) {
      console.error(e);
    }
  }

  render() {

    return (
      <FeatureGroup>
        {this.state.oilSpills.map((oilSpill, index) => (
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
