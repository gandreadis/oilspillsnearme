import React from 'react';
import {Helmet} from "react-helmet";
import Footer from "../components/navigation/Footer";

const HomePage = () => (
  <div>
    <Helmet>
      <title>oilspillsnear.me</title>
    </Helmet>
    <div className="container">
      Oil spills are bad!
    </div>
    <Footer/>
  </div>
);

export default HomePage;
