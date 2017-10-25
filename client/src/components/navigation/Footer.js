import React from 'react';
import "./Footer.css";

const Footer = () => (
  <footer className="footer pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center">
          <img className="img-fluid" src="/img/logo-white.svg" alt="oilspillsnear.me"/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center">
          <div>
            <div>
              <strong className="contact-heading">
                <span className="fa fa-github"/>
                {" "}
                Source
              </strong>
              <br/>
              <a href="https://github.com/gandreadis/oilspillsnearme" target="_blank" rel="noopener noreferrer">
                gandreadis/oilspillsnearme
              </a>
            </div>
            <div className="mt-3">
              <strong className="contact-heading">
                <span className="fa fa-envelope"/>
                {" "}
                Contact
              </strong>
              <br/>
              <a href="mailto:info@gandreadis.com">
                info@gandreadis.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
