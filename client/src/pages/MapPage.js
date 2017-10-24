import {inject, observer} from "mobx-react";
import React from 'react';
import {Helmet} from "react-helmet";
import WorldMap from "../components/map/WorldMap";

@inject("countryRigStore", "spillStore")
@observer
class MapPage extends React.Component {
  componentDidMount() {
    this.props.spillStore.load();
    this.props.countryRigStore.load();
  }

  render() {
    return (
      <div className="full-height">
        <Helmet>
          <title>Map - oilspillsnear.me</title>
        </Helmet>
        <WorldMap/>
      </div>
    );
  }
}

export default MapPage;
