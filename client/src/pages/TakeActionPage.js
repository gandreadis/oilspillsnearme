import React from 'react';
import {Helmet} from "react-helmet";
import Footer from "../components/navigation/Footer";

const TakeActionPage = () => (
  <div>
    <Helmet>
      <title>Take Action - oilspillsnear.me</title>
    </Helmet>
    <div className="container">
      Taking action...
    </div>
    <Footer/>
  </div>
);

export default TakeActionPage;
