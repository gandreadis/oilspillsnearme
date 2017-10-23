import React from 'react';
import Footer from "../components/navigation/Footer";
import "./osnm.css";
import ContentSection from "../components/navigation/ContentSection";

const HomePage = () => (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide img-fluid" src="https://www.sailorsforthesea.org/sites/default/files/styles/large/public/Oil_and_Fuel_Spills_Pics-01.png?itok=ixc8qA6v" alt="First slide" />
          <div className="container">
            <div className="carousel-caption d-none d-md-block">
              <h1>oilspills.me</h1>
              <p>With our interactive map, you can find oil spills all over the world and learn more about their effects.</p>
              <p><a className="btn btn-lg btn-primary" href="/map" role="button">show me</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  	
  	<div>
	    <ContentSection title="Oil spills affact nature and everyday lives" backgroundColor="#19381B" color="#EEEEEE" />
    </div>    

    <div className="container">

      <div className="row mt-5">
        <div className="col-md-7">
          <h2 className="heading">Ecosystems</h2>
          <p className="lead">Whenever an oil spill happens, not only oil but also other
          toxic chemicals are leaked into the ocean, killing different creatures that inhabit
          parts of the area around the spill. Since it is almost impossible to recover
          all the spilled chemicals out of the water, this can have a long lasting effect on
          the biodiversity in the area. For instance in April of 2010, an astimated 206 million gallons
          of oil was spilled in the Gulf of Mexico, killing hundreds of birds and marine life and most likely devestating the gulf coast for years to come. <a href="https://www.mnn.com/earth-matters/wilderness-resources/stories/the-13-largest-oil-spills-in-history">Source</a>
         </p>
        </div>
        <div className="col-md-5">
          <img className="image img-fluid mx-auto" src="https://fortunedotcom.files.wordpress.com/2014/12/rtr2esxs.jpg" alt="placeholder image" />
        </div>
      </div>

      <hr className="divider" />

      <div className="row mb-5">
        <div className="col-md-7 order-md-2">
          <h2 className="heading">Local Industries</h2>
          <p className="lead">Local industries like fishing and tourism suffer from oil spills 
          aswell. After the oil spill in the Gulf of Mexico, as long as 5 years after the spill, 
          fishermen still felt the effect of the spill every single day. 
          They suffered from huge income losses because the amount they caught dropped severely and 
          fish they did catch, barely had any meat on them to be of much value. <a href="https://news.vice.com/article/five-years-after-bp-disaster-gulf-of-mexicos-fishing-industry-continues-to-struggle">Source</a></p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="image img-fluid mx-auto" src="http://www.publicdomainpictures.net/pictures/90000/velka/small-fishing-boat-13980804669ph.jpg" alt="placeholder image" />
        </div>
      </div>

    </div>
    <Footer/>
  </div>
);

export default HomePage;
