import {inject, observer} from "mobx-react";
import React from 'react';
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";
import BeachMap from "../components/map/BeachMap";
import Footer from "../components/navigation/Footer";
import PageHeader from "../components/navigation/PageHeader";
import {getSpillName} from "../util/spill-text";

@inject("singleSpillStore")
@observer
class SpillPage extends React.Component {
  componentDidMount() {
    this.props.singleSpillStore.load(this.props.spillId);
  }

  render() {
    if (this.props.singleSpillStore.error404.get()) {
      return <Redirect to="/404"/>;
    }

    if (this.props.singleSpillStore.spillId.get() === -1) {
      return <span/>;
    }

    const spill = this.props.singleSpillStore.spill;

    return (
      <div className="full-height">
        <Helmet>
          <title>{getSpillName(spill)} - oilspillsnear.me</title>
        </Helmet>
        <PageHeader>
          {getSpillName(spill)}
        </PageHeader>
        <div className="container">
          <h2 className="pt-5 pb-2 text-center">Beaches of the nearest country</h2>
          <div className="row">
            <div className="col">
              <div className="mx-auto" style={{height: 400, maxWidth: 600}}>
                <BeachMap/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to={"/map"} className="btn btn-primary btn-lg mt-5 mb-5">
            <span className="fa fa-angle-left mr-2"/>
            Back to the map
          </Link>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SpillPage;
