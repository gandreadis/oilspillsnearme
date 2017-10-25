import approx from "approximate-number";
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";
import {formatSpillDate, getSpillName} from "../../util/spill-text";

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
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 1002,
          width: 350,
          height: "100%",
          backgroundColor: "rgba(230, 230, 230, 0.8)",
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >
        <h2 className="p-3 pr-5 bg-info text-white">
          {getSpillName(spill)}
          <button
            className="btn btn-info float-right"
            title="Close sidebar"
            onClick={this.props.onClose}
            style={{
              position: "absolute",
              right: 10,
              top: 10
            }}
          >
            <span className="fa fa-times"/>
          </button>
        </h2>
        <div className="container-fluid">
          <span className="text-muted">Occurred on {formatSpillDate(spill)}</span><br/>
          <span className="fa fa-tint mr-1"/>
          <strong>{approx(spill.size)}</strong> m<sup>3</sup> of oil spilt

          {spill.note ?
            <div className="card p-2 mt-2" style={{maxHeight: 400, overflowY: "auto"}}>
              {spill.note}
            </div> :
            undefined
          }

          <div className="text-center">
            <Link to={"/spill/" + spill.id} className="btn btn-primary btn-block mt-2">
              More info
              <span className="fa fa-angle-right ml-2"/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default OilSpillSidebar;
