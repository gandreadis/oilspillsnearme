import classNames from "classnames";
import React from 'react';

const LocationControl = ({setLocation, locationIsShared, toggleLocationIsShared}) => (
  <button
    type="button"
    className={classNames("btn btn-primary", {active: locationIsShared})}
    title="Show/hide my position on the map"
    style={{position: "absolute", bottom: "50px", left: "5px", zIndex: 1000}}
    onClick={toggleLocationIsShared}
  >
    <span className="fa fa-location-arrow mr-2"/>
    Recent oil spills near me
  </button>
);

export default LocationControl;
