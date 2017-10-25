import React from 'react';

const MapLegend = () => {
  const html = `
    <span class="fa fa-tint"/> <strong>Circles</strong> represent oil spills<br/>
    <span class="fa fa-globe"/> <strong>Countries</strong> are colored depending on their number of offshore oil rigs<br/>
    <span class="fa fa-arrow-left"/> <strong>Switch</strong> these views on or off with the toolbar left<br/>
  `;

  return (
    <button
      className="btn btn-outline-info"
      title="A legend of the map"
      style={{position: "absolute", bottom: "20px", right: "5px", zIndex: 1000}}
      data-toggle="popover"
      data-trigger="focus"
      data-content={html}
      data-html={true}
    >
      <span className="fa fa-info-circle mr-2"/>
      What am I seeing?
    </button>
  );
};

export default MapLegend;
