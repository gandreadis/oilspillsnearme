import React from 'react';
import Footer from "../components/navigation/Footer";
import "./osnm.css";

const HomePage = () => (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide" src="https://www.sailorsforthesea.org/sites/default/files/styles/large/public/Oil_and_Fuel_Spills_Pics-01.png?itok=ixc8qA6v" alt="First slide" />
          <div className="container">
            <div className="carousel-caption d-none d-md-block text-left">
              <h1>The interactive map</h1>
              <p>With our interactive map, you can find oil spills all over the world and learn more about the effects of these spills.</p>
              <p><a className="btn btn-lg btn-primary" href="/map" role="button">Go to interactive Map</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src="https://i.cbc.ca/1.3037560.1429284038!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_1180/gulf-oil-spill-gallery.jpg
          " alt="Second slide" />
          <div className="container">
            <div className="carousel-caption d-none d-md-block">
              <h1>This needs to change!</h1>
              <p>If you want to take action by supporting initiatives and organizations, visit the Take Action page to get you started.</p>
              <p><a className="btn btn-lg btn-primary" href="/take-action" role="button">Take action</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src="https://images.csmonitor.com/csmarchives/2010/05/0517-ABIGSPILL-02-GULF-COAST-ENVIRONMENT-OIL-SPILL.jpg?alias=standard_900x600" alt="Third slide" />
          <div className="container">
            <div className="carousel-caption d-none d-md-block text-right">
              <h1>Want to learn more about oilspillsnear.me?</h1>
              <p>On the about page you can learn more about the application and find a list of our sources.</p>
              <p><a className="btn btn-lg btn-primary" href="/about" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    <div className="container">

      <div className="row">
        <div className="col-md-7">
          <h2 className="heading">Heading 1</h2>
          <p className="lead">Some very interesting text.</p>
        </div>
        <div className="col-md-5">
          <img className="image img-fluid mx-auto" src="https://i-stella.com/assets/img/placeholder.gif" alt="placeholder image" />
        </div>
      </div>

      <hr className="divider" />

      <div className="row">
        <div className="col-md-7 order-md-2">
          <h2 className="heading">Heading 2</h2>
          <p className="lead">Some very interesting text.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="image img-fluid mx-auto" src="https://i-stella.com/assets/img/placeholder.gif" alt="placeholder image" />
        </div>
      </div>

      <hr className="divider" />

      <div className="row">
        <div className="col-md-7">
          <h2 className="heading">Heading 3</h2>
          <p className="lead">Some very interesting text.</p>
        </div>
        <div className="col-md-5">
          <img className="image img-fluid mx-auto" src="https://i-stella.com/assets/img/placeholder.gif" alt="placeholder image" />
        </div>
      </div>

      <hr className="divider" />

    </div>
    <Footer/>
  </div>
);

export default HomePage;
