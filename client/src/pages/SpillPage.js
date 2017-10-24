import {inject, observer} from "mobx-react";
import React from 'react';
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";
import PageHeader from "../components/navigation/PageHeader";
import {getSpillName} from "../util/spill-text";

@inject("countryRigStore", "spillStore")
@observer
class SpillPage extends React.Component {
  componentDidMount() {
    this.props.spillStore.load();
    this.props.countryRigStore.load();
  }

  render() {
    const spill = this.props.spillStore.getSpill(this.props.spillId);

    if (!spill) {
      if (this.props.spillStore.spills.length === 0) {
        return <span/>
      } else {
        return <Redirect to="/404"/>
      }
    }

    return (
      <div className="full-height">
        <Helmet>
          <title>{getSpillName(spill)} - oilspillsnear.me</title>
        </Helmet>
        <PageHeader>
          {getSpillName(spill)}
        </PageHeader>
        <div className="text-center">
          <Link to={"/map"} className="btn btn-primary mt-2">
            <span className="fa fa-angle-left mr-2"/>
            Back to the map
          </Link>
        </div>
      </div>
    );
  }
}

export default SpillPage;
