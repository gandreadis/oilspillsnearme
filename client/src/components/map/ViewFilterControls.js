import classNames from "classnames";
import React from 'react';

const ViewFilterControls = ({showSpills, showRigs, toggleSpills, toggleRigs}) => (
  <div
    className="btn-group"
    role="group"
    aria-label="Filter view"
    style={{position: "absolute", bottom: "5px", left: "5px", zIndex: 1000}}
  >
    <span
      className="btn btn-secondary disabled"
      title="Filter what you want to see on the map"
    >
      <span className="fa fa-filter mr-2"/>
      Filter
    </span>
    <button
      type="button"
      className={classNames("text-center btn btn-success", {active: showSpills})}
      title="Show/hide oil spills on the map"
      style={{width: "40px"}}
      onClick={toggleSpills}
    >
      <span className="fa fa-tint"/>
    </button>
    <button
      type="button"
      className={classNames("text-center btn btn-success", {active: showRigs})}
      title="Show/hide oil rig statistics on the map"
      style={{width: "40px"}}
      onClick={toggleRigs}
    >
      <span className="fa fa-globe"/>
    </button>
  </div>
);

export default ViewFilterControls;
