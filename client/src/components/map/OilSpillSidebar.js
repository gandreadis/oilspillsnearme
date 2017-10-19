import approx from "approximate-number";
import {inject, observer} from "mobx-react";
import React from 'react';

@inject("spillStore")
@observer
class OilSpillSidebar extends React.Component {
  render() {
    const spill = this.props.spillStore.getSpill(this.props.spillId);

    if (!spill) {
      return <span/>;
    }

    return (
      <div
        className="pt-3"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 1000,
          width: 300,
          height: "100%",
          backgroundColor: "rgba(230, 230, 230, 0.7)"
        }}
      >
        <button
          className="btn btn-secondary btn-sm"
          title="Close sidebar"
          onClick={this.props.onClose}
          style={{
            position: "absolute",
            right: -2,
            top: -2,
          }}
        >
          <span className="fa fa-times"/>
        </button>
        <div className="container-fluid">
          <h2 className="pr-3">{spill.name}</h2>
          Occurred on {spill.date}<br/>
          <strong>{approx(spill.sizeTonnes)}</strong> tonnes of oil spilt
        </div>
      </div>
    );
  }
}

export default OilSpillSidebar;
