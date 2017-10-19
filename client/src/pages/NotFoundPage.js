import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Footer from "../components/navigation/Footer";
import PageHeader from "../components/navigation/PageHeader";

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>Page Not Found - oilspillsnear.me</title>
    </Helmet>
    <PageHeader>404</PageHeader>
    <div className="container pt-5 pb-5 text-center">
      <p className="lead">Unfortunately, we couldn't find a page here...</p>
      <Link to="/" className="btn btn-primary btn-lg" role="button">
        <span className="fa fa-home mr-2"/>
        Get me back home
      </Link>
    </div>
    <Footer/>
  </div>
);

export default NotFoundPage;
