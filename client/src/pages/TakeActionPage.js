import React from 'react';
import {Helmet} from "react-helmet";
import Footer from "../components/navigation/Footer";
import PageHeader from "../components/navigation/PageHeader";
import "./osnm.css";

const TakeActionPage = () => (
  <div>
    <Helmet>
      <title>Take Action - oilspillsnear.me</title>
    </Helmet>
    <PageHeader>
      Take Action
    </PageHeader>
    <div className="container pb-5">
      <div className="row pt-5">
        <div className="center">
          <h2 className="text-center">
            <span className="fa fa-credit-card-alt mr-3"/>
            Donate
          </h2>
          <p className="lead">
            Every cent helps! Give your financial support to an organization or initiative that fights for your cause,
            to help them reach their goals. Not sure who to fund? Have a look below.
          </p>
          <h2 className="text-center mt-3">
            <span className="fa fa-bullhorn mr-3"/>
            Let your voice be heard!
          </h2>
          <p className="lead">
            Contact your local representatives and let them know you want a strong push for renewable energies and an
            end to unsafe oil exploration. Without your encouragement, politics won't move!
          </p>
        </div>
      </div>

      <div className="display-4 text-center mt-5 mb-5">
        Organizations Fighting for This Cause
      </div>
      <div className="row">
        <div className="col-md-7">
          <h2 className="heading">Greenpeace</h2>
          <blockquote className="blockquote">
            Oil and gas pollute our lands, oceans and air, and fuel climate change. To avoid the
            worst impacts of climate change, we need to keep most of these dirty fuels in the ground. Yet powerful oil
            and gas companies keep pushing to tap dirtier, riskier and costlier sources: drilling in the Arctic, mining
            tar sands, and fracking shale oil and gas. Greenpeace is fighting back. We stand up for our coasts, our
            communities and our climate. We show polluting oil and gas have no future in the clean, safe and secure 100
            percent renewable energy system we must have.
          </blockquote>
          <p>
            <a
              className="btn btn-lg btn-primary"
              href="http://www.greenpeace.org/international/en/campaigns/climate-change/End-oil-and-gas/"
              role="button"
              target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="image img-fluid mx-auto"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e2e27147292095.587610f67e2a6.gif"
            alt="Greenpeace"/>
        </div>
      </div>

      <hr className="divider"/>

      <div className="row">
        <div className="col-md-7 order-md-2 text-right">
          <h2 className="heading">World Wildlife Fund</h2>
          <blockquote className="blockquote">
            WWF is identifying the most significant and sensitive places for both wildlife and indigenous peoples within
            areas targeted for oil development. In identifying these areas, we are looking at the places that indigenous
            people and communities depend on for food, resources, or that are important to their culture.
          </blockquote>
          <p>
            <a
              className="btn btn-lg btn-primary"
              href="https://www.worldwildlife.org/threats/oil-and-gas-development"
              role="button"
              target="_blank"
              rel="noopener noreferrer">
              Visit website
            </a>
          </p>
        </div>
        <div className="col-md-5">
          <img className="image img-fluid mx-auto" src="https://i.imgur.com/LdKcByu.gif" alt="WWF"/>
        </div>
      </div>

      <hr className="divider"/>

      <div className="row">
        <div className="col-md-7">
          <h2 className="heading">IPIECA</h2>
          <p className="lead">The Global Initiative for oil spill preparedness and response</p>
          <blockquote className="blockquote">
            Launched in 1996, the Global Initiative (GI) is an umbrella programme under which
            governments, through the International Maritime Organization (IMO), and the oil industry, through IPIECA,
            work together to assist countries in developing national structures and capability for oil spill
            preparedness and response.
          </blockquote>
          <p>
            <a className="btn btn-lg btn-primary"
               href="http://www.ipieca.org/our-work/environment/oil-spill-preparedness-and-response/the-global-initiative-for-oil-spill-preparedness-and-response/"
               role="button"
               target="_blank"
               rel="noopener noreferrer">
              Visit website
            </a>
          </p>
          <p className="lead mt-4">The IPIECA also has three regional programmes:</p>
          <div className="list-group">
            <a href="http://ospri.moonfruit.com/" className="list-group-item" target="_blank" rel="noopener noreferrer">
              The Black Sea, Caspian Sea and Central Eurasia (OSPRI)
            </a>
            <a href="http://www.giwacaf.net/en/" className="list-group-item" target="_blank" rel="noopener noreferrer">
              West, Central and Southern Africa (GI WACAF)
            </a>
            <a href="http://www.gisea.org/" className="list-group-item" target="_blank" rel="noopener noreferrer">
              South East Asia (GI SEA)
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <img className="image img-fluid mx-auto" src="https://i.imgur.com/DesuwCN.png" alt="IPIECA"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);

export default TakeActionPage;
