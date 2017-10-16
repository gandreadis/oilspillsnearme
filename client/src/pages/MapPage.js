import React from 'react';
import {Helmet} from "react-helmet";
import WorldMap from "../components/map/WorldMap";

const MapPage = () => (
  <div className="full-height">
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
            integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
            crossOrigin=""/>
      <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
              integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
              crossOrigin=""/>
    </Helmet>
    <WorldMap/>
  </div>
);

export default MapPage;
