import React from 'react';
import Footer from "../components/navigation/Footer";
import "./osnm.css";

const TakeActionPage = () => (
  <div>

    <div className="container">
      
      <div className="row">
        <div className="center">
          <h1 className="heading-center">Take action</h1>
        </div>
      </div><br/>
      <div className="row">
        <div className="center">
          <p className="lead">There are two main ways to take action:<br/>
           <h3><i className="fa fa-credit-card-alt" aria-hidden="true"></i>Donate</h3>
           Every bit of money helps! By giving financial support to an organization or an initiative, you can help them trying to reach their goals. <br/><br/>
          <h3><i className="fa fa-bullhorn" aria-hidden="true"></i>Let your voice be heard!</h3>
           You can contact your local representatives and let them know you care about oil spills and its effects on the environment. Without a little push, they might not take action! </p>
          <p className="lead">
          Below, you can find a variety of organizations, projects and initiatives that are active on a worldwide or a local scale, in regards to oil spills.</p>
        </div>
      </div>

      <hr className="divider" />
      
      <div className="row">
        <div className="col-md-7">
          <h2 className="heading">Greenpeace</h2>
          <p className="lead">"Oil and gas pollute our lands, oceans and air, and fuel climate change. To avoid the worst impacts of climate change, we need to keep most of these dirty fuels in the ground. Yet powerful oil and gas companies keep pushing to tap dirtier, riskier and costlier sources: drilling in the Arctic, mining tar sands, and fracking shale oil and gas. Greenpeace is fighting back. We stand up for our coasts, our communities and our climate. We show polluting oil and gas have no future in the clean, safe and secure 100 percent renewable energy system we must have."</p>
          <p><a className="btn btn-lg btn-primary" href="http://www.greenpeace.org/international/en/campaigns/climate-change/End-oil-and-gas/" role="button">Visit website</a></p>
        </div>
        <div className="col-md-5 order-md-1">
          <a href="http://www.greenpeace.org/international/en/campaigns/climate-change/End-oil-and-gas/">
          <img className="image img-fluid mx-auto" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e2e27147292095.587610f67e2a6.gif" alt="placeholder image" />
          </a>
        </div>
      </div>

      <hr className="divider" />

      <div className="row">
        <div className="col-md-7 order-md-2">
          <h2 className="heading">World Wildlife Fund</h2>
          <p className="lead">"WWF is identifying the most significant and sensitive places for both wildlife and indigenous peoples within areas targeted for oil development. In identifying these areas, we are looking at the places that indigenous people and communities depend on for food, resources, or that are important to their culture."</p> 
          <p><a className="btn btn-lg btn-primary" href="https://www.worldwildlife.org/threats/oil-and-gas-development" role="button">Visit website</a></p>
        </div>
        <div className="col-md-5">
          <a href="https://www.worldwildlife.org/threats/oil-and-gas-development">
          <img className="image img-fluid mx-auto" src="https://i.imgur.com/LdKcByu.gif" alt="placeholder image" />
          </a>
        </div>
      </div>

      <hr className="divider" />

      <div className="row">
        <div className="col-md-7">
          <h2 className="heading">IPIECA</h2>
          <p className="lead">The Global Initiative for oil spill preparedness and response</p>
          <p className="lead">"Launched in 1996, the Global Initiative (GI) is an umbrella programme under which governments, through the International Maritime Organization (IMO), and the oil industry, through IPIECA, work together to assist countries in developing national structures and capability for oil spill preparedness and response."</p> 
          <p><a className="btn btn-lg btn-primary" href="http://www.ipieca.org/our-work/environment/oil-spill-preparedness-and-response/the-global-initiative-for-oil-spill-preparedness-and-response/" role="button">Visit website</a></p>
          <p className="lead">The IPIECA has three programmes established in different regions:</p>
          <div className="list-group">
            <a href="http://ospri.moonfruit.com/" className="list-group-item">The Black Sea, Caspian Sea and Central Eurasia (OSPRI)</a>
            <a href="http://www.giwacaf.net/en/" className="list-group-item">West, Central and Southern Africa (GI WACAF)</a>
            <a href="http://www.gisea.org/" className="list-group-item">South East Asia (GI SEA)</a>
          </div>
        </div>
        <div className="col-md-5">
          <a href="http://www.ipieca.org/our-work/environment/oil-spill-preparedness-and-response/the-global-initiative-for-oil-spill-preparedness-and-response/">
          <img className="image img-fluid mx-auto" src="https://i.imgur.com/DesuwCN.png" alt="placeholder image" />
          </a>
        </div>
      </div>

      <hr className="divider" />

    </div>
    <Footer/>
  </div>
);

export default TakeActionPage;
