import React from 'react';
import {Link} from "react-router-dom";
import ContentSection from "../components/navigation/ContentSection";
import Footer from "../components/navigation/Footer";
import PageHeader from "../components/navigation/PageHeader";

const SourceItem = ({title, description, url}) => (
  <li className="list-group-item">
    <strong className="mr-1">{title}</strong>
    ({description})
    <br/>
    <span className="fa fa-globe mr-1"/>
    <a href={url}>{url}</a>
  </li>
);

const TeamMember = ({name, teamRoles, github, linkedIn, website}) => (
  <div className="card m-1 col-xl-3 col-lg-3 col-md-5 col-sm-10 col-10">
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <h6 className="card-subtitle mb-2 text-muted">
        {teamRoles.map((role, index) => (
          <div key={index}>{role}</div>
        ))}
      </h6>
      {github ?
        <a href={github} className="card-link" target="_blank" rel="noopener noreferrer">
          <span className="fa fa-github"/>
        </a> :
        undefined
      }
      {linkedIn ?
        <a href={linkedIn} className="card-link" target="_blank" rel="noopener noreferrer">
          <span className="fa fa-linkedin"/>
        </a> :
        undefined
      }
      {website ?
        <a href={website} className="card-link" target="_blank" rel="noopener noreferrer">
          <span className="fa fa-globe"/>
        </a> :
        undefined
      }
    </div>
  </div>
);

const AboutPage = () => (
  <div>
    <PageHeader>
      About
    </PageHeader>
    <ContentSection title="Oil Spills Near Me">
      <p className="lead text-center">Visualizing the impact of oil spills on our environment</p>

      <h4>Motivation</h4>
      <p>
        <em>Can you say with absolute certainty that no oil was spilled in oceans near you in the past years?</em> We
        couldn't, which is why we made this application.
      </p>
      <p>
        Oil spills have a profound impact on our lives, often in ways that we don't think of and for longer periods of
        time than we'd want to believe. We humans have already spilled enough oil into our oceans to do lasting damage
        to ecosystems and industries across the globe!
      </p>
      <p>
        Because of the significant consequences of marine oil pollution incidents, we want to raise awareness through
        this platform. We put oil spills and related information <Link to="/map">on one map</Link>, to give you a more
        complete picture of the incidents and their consequences. We also propose <Link to="/take-action">concrete
        steps</Link> that you can follow to contribute to a future with less marine oil pollution!
      </p>

      <h4>Background</h4>
      <p>
        This website was created as a final project of a course on semantic web technologies at the VU Amsterdam. A
        number of data sources have been collected and integrated into a knowledge base build on top of RDF and OWL
        formalisms.
      </p>
    </ContentSection>
    <ContentSection title="Sources" backgroundColor="#19381B" color="#EEEEEE">
      <ul className="list-group" style={{color: "#111111"}}>
        <SourceItem
          title="GeoJSON for all countries"
          description="Sourced from Natural Earth"
          url="https://geojson-maps.ash.ms"
        />
      </ul>
    </ContentSection>
    <ContentSection title="Our Stack">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
          <ul className="list-group text-left">
            <li className="d-flex list-group-item justify-content-between align-items-center list-group-item-secondary">
            <span style={{minWidth: 100}}>
              <span className="fa fa-window-maximize mr-2"/>
              <strong className="text-right">Browser</strong>
            </span>
              <span className="text-right">JavaScript, React, Leaflet.js</span>
            </li>
            <li className="d-flex list-group-item justify-content-between align-items-center list-group-item-secondary">
            <span style={{minWidth: 100}}>
              <span className="fa fa-television mr-2"/>
              <strong>Server</strong>
            </span>
              <span className="text-right">
              Node.js, Express
            </span>
            </li>
            <li className="d-flex list-group-item justify-content-between align-items-center list-group-item-secondary">
            <span style={{minWidth: 100}}>
              <span className="fa fa-database mr-2"/>
              <strong>Database</strong>
            </span>
              <span className="text-right">Stardog</span>
            </li>
          </ul>
          <div className="card border-info mt-3">
            <div className="card-body">
              <strong>Interested in the code behind this application?</strong>
              <br/>
              Have a look at our
              {" "}
              <a href="https://github.com/gandreadis/oilspillsnearme" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-github mr-1"/>
                GitHub repository
              </a>!
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection title="The Team" backgroundColor="#19381B" color="#EEEEEE">
      <div className="row d-flex justify-content-center" style={{color: "#111111"}}>
        <TeamMember
          name="Georgios Andreadis"
          teamRoles={["Project Lead", "Software Engineer"]}
          github="https://github.com/gandreadis"
          linkedIn="https://www.linkedin.com/in/gandreadis"
          website="http://gandreadis.com"
        />
        <TeamMember
          name="Madeleine Vanessa Wijono"
          teamRoles={["Ontology Expert", "Software Engineer"]}
          github="https://github.com/ChocoKimiko"
          linkedIn="https://www.linkedin.com/in/madeleine-vanessa-wijono-76a520b3/"
        />
        <TeamMember
          name="Ashwin Barendregt"
          teamRoles={["Designer", "Software Engineer"]}
          github="https://github.com/AshwinJB"
        />
      </div>
    </ContentSection>
    <Footer/>
  </div>
);

export default AboutPage;
