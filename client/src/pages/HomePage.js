import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Footer from "../components/navigation/Footer";
import "./osnm.css";

const HomePage = () => (
  <div>
    <Helmet>
      <title>oilspillsnear.me</title>
    </Helmet>
    <div style={{
      backgroundImage: "url('https://news-images.vice.com/images/2016/05/16/untitled-article-1463407037-body-image-1463407987.jpg?resize=1920:*&output-quality=50')",
      backgroundPosition: "center bottom"
    }}>
      <div className="text-center container-fluid text-white" style={{
        padding: "120px 0"
      }}>
        <h1 className="display-4">oilspillsnear.me</h1>
        <p className="lead mt-3">
          Putting oil spills around you on a map
        </p>
        <Link className="btn btn-lg btn-primary mt-3" to="/map">Show me the map</Link>
      </div>
    </div>

    <div style={{backgroundColor: "#473220", padding: "100px 0"}}>
      <div className="container text-white">
        <div className="text-center display-4 mb-3">It's no secret that oil spills are <strong>bad</strong>.</div>
        <div className="lead">
          But was there an oil spill in your area <strong>recently</strong>? What where its <strong>impacts</strong> on
          your life, whether indirect or direct? What can you do to help <strong>reduce</strong> their future impacts
          and <strong>prevent</strong> new spills? Read on to learn more about the impacts of oil spills and what this
          application offers.
        </div>
      </div>
    </div>

    <div className="container pt-5 pb-5">
      <div className="row mt-5">
        <div className="col-md-7">
          <h2 className="heading">Ecosystems</h2>
          <p className="lead">
            Whenever an oil spill happens, not only oil but also other
            toxic chemicals are leaked into the ocean, killing different creatures that inhabit
            parts of the area around the spill. Since it is almost impossible to recover
            all spilled chemicals from the water, this can have a long lasting effect on
            the biodiversity in the area. For instance, in April of 2010, an estimated 206 million gallons
            of oil were spilled in the Gulf of Mexico, killing hundreds of birds and marine life and most likely
            devastating the gulf coast for years to come.
            <sup>
              <small>
                <a
                  href="https://www.mnn.com/earth-matters/wilderness-resources/stories/the-13-largest-oil-spills-in-history">
                  Source
                </a>
              </small>
            </sup>
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="image img-fluid mx-auto"
            src="https://fortunedotcom.files.wordpress.com/2014/12/rtr2esxs.jpg"
            alt="Ecosystems"/>
        </div>
      </div>

      <hr className="divider"/>

      <div className="row mb-5">
        <div className="col-md-7 order-md-2">
          <h2 className="heading">Local Industries</h2>
          <p className="lead">
            Local industries like fishing and tourism suffer from oil spills,
            as well. For as long as 5 years after the oil spill in the Gulf of Mexico,
            fishermen still felt its impacts every single day.
            They suffered from huge income losses because the amount they caught dropped severely. Fish they did manage
            to catch, barely had any meat on them to be of much value.
            <sup>
              <small>
                <a
                  href="https://news.vice.com/article/five-years-after-bp-disaster-gulf-of-mexicos-fishing-industry-continues-to-struggle">
                  Source
                </a>
              </small>
            </sup>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="image img-fluid mx-auto"
            src="http://www.publicdomainpictures.net/pictures/90000/velka/small-fishing-boat-13980804669ph.jpg"
            alt="Local Industries"
          />
        </div>
      </div>
    </div>

    <div style={{backgroundColor: "#473220", padding: "70px 0"}}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/map" className="btn btn-primary btn-lg btn-block mb-sm-2 mb-2">What are recent oil spills near
              me?</Link>
          </div>
          <div className="col">
            <Link to="/take-action" className="btn btn-warning btn-lg btn-block">What are ways to take action?</Link>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
);

export default HomePage;
