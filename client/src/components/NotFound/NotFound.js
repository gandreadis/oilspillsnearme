import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => (
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-3">404</h1>
      <p className="lead">Unfortunately, we couldn't find a page here...</p>
      <Link to="/" className="btn btn-primary btn-lg" role="button">Get me back home</Link>
    </div>
  </div>
);

export default NotFound;
