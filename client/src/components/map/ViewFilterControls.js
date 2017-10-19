import classNames from "classnames";
import React from 'react';

const ViewFilterControls = ({showSpills, showRigs, toggleSpills, toggleRigs}) => (
  <div
    className="btn-group"
    role="group"
    aria-label="Filter view"
    style={{display: "absolute", bottom: "45px", left: "7px", zIndex: 1000}}
  >
    <span className="btn btn-secondary disabled">
      <span className="fa fa-filter"/>
    </span>
    <button
      type="button"
      className={classNames("text-center btn btn-success", {active: showSpills})}
      style={{width: "40px"}}
      onClick={toggleSpills}
    >
      <span className="fa fa-tint"/>
    </button>
    <button
      type="button"
      className={classNames("text-center btn btn-success", {active: showRigs})}
      style={{width: "40px"}}
      onClick={toggleRigs}
    >
      <span className="fa fa-globe"/>
    </button>
  </div>
);

export default ViewFilterControls;
