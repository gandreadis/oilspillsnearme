import React from 'react';
import Footer from "../components/navigation/Footer";
import "./osnm.css";

const HomePage = () => (
  <div>

    <div style={{
      backgroundImage: "url('https://news-images.vice.com/images/2016/05/16/untitled-article-1463407037-body-image-1463407987.jpg?resize=1920:*&output-quality=75')",
      backgroundPosition: "center bottom"
    }}>
      <div className="text-center container-fluid text-white" style={{
        padding: "120px 0"
      }}>
        <h1 className="display-3">oilspillsnear.me</h1>
        <p className="lead mt-3">
          Putting oil spills around you on a map
        </p>
        <a className="btn btn-lg btn-primary mt-3" href="/map" role="button">Show me oil spills near me</a>
      </div>
    </div>

    <div style={{backgroundColor: "#473220", padding: "100px 0"}}>
      <div className="container text-white">
        <div className="text-center display-4 mb-3">It's no secret that oil spills are bad.</div>
        <div className="lead">
          But was there an oil spill in your area <strong>recently</strong>? What where its <strong>impacts</strong> on
          your life, whether indirect or direct? What can you do to help <strong>reduce</strong> their future impacts
          and <strong>prevent</strong> new spills? Read on to learn more about the impacts of oil spills and what this
          application offers.
        </div>
      </div>
    </div>

    <div className="container pt-5">
      <div className="row mt-5">
        <div className="col-md-7">
          <h2 className="heading">Ecosystems</h2>
          <p className="lead">
            Whenever an oil spill happens, not only oil but also other
            toxic chemicals are leaked into the ocean, killing different creatures that inhabit
            parts of the area around the spill. Since it is almost impossible to recover
            all the spilled chemicals out of the water, this can have a long lasting effect on
            the biodiversity in the area. For instance in April of 2010, an estimated 206 million gallons
            of oil was spilled in the Gulf of Mexico, killing hundreds of birds and marine life and most likely
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
            Local industries like fishing and tourism suffer from oil spills
            as well. After the oil spill in the Gulf of Mexico, as long as 5 years after the spill,
            fishermen still felt the effect of the spill every single day.
            They suffered from huge income losses because the amount they caught dropped severely and
            fish they did catch, barely had any meat on them to be of much value.
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
    <Footer/>
  </div>
);

export default HomePage;
