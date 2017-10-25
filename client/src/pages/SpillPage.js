import approx from "approximate-number";
import {inject, observer} from "mobx-react";
import React from 'react';
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";
import BeachMap from "../components/map/BeachMap";
import Footer from "../components/navigation/Footer";
import PageHeader from "../components/navigation/PageHeader";
import {getSpillName}  from "../util/spill-text";
import { ComposedChart, BarChart, AreaChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

var randomColor = require('randomcolor');

const data = [
  {year: 1998, pisces:10},
  {year: 1999, bivalvia:5000},
  {year: 2000, bivalvia:200, myzozoa:53, other:72},
  {year: 2010, myzozoa:2645},
  {year: 2011, other:733},
]

const typeList = ['pisces', 'bivalvia', 'echiura', 'myzozoa','other'];
var lis = []

for (var type=0; type<typeList.length; type++) {
  lis.push(<Bar dataKey={typeList[type]} stackId="a" fill={randomColor()} />);
}
function retr_dec(num) {
  return (num.split(',')[1] || []).length;
}

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

    const seafood_production = [];
    {this.props.singleSpillStore.seafood_production.map(seafood => (
      seafood_production.push({ time: parseInt(seafood.time), amount: parseInt(seafood.amount) })
    ))}

    const tourism_arrival = [];
    {this.props.singleSpillStore.tourism_arrival.map(arrival => (
      tourism_arrival.push({ time: parseInt(arrival.time), amount: parseInt(arrival.amount) })
    ))}

    const tourism_expenditures = [];
    {this.props.singleSpillStore.tourism_expenditures.map(expenditures => {
      if(this.props.singleSpillStore.tourism_expenditures.length !== 0){
        if(expenditures.amount.toString().indexOf('E+') !== -1 ){
          var res = expenditures.amount.split("E+");
          var dec = retr_dec(res[0]);
          expenditures.amount = parseInt(res[0].replace(",", ""))*Math.pow(10, (parseInt(res[1])-dec));
        }
      }

      tourism_expenditures.push({ time: parseInt(expenditures.time), amount: parseInt(expenditures.amount) })
    })}

    return (
      <div className="full-height">
        <Helmet>
          <title>{getSpillName(spill)} - oilspillsnear.me</title>
        </Helmet>
        <PageHeader>
          {getSpillName(spill)}
        </PageHeader>
        <div className="container">
          <div className="row pt-3 pb-2">
          <div className="col-md-6 text-left">
            <span className="text-right fa fa-tint mr-1"/>
            <strong>{approx(spill.size)}</strong> m<sup>3</sup> of oil spilt
          </div>
            <div className="col-md-6 text-right">The nearest country is  <strong>{spill.countryName}</strong></div>
          </div>
            {spill.note ?
              <div className="card p-2 mt-2" style={{maxHeight: 200, overflowY: "auto"}}>
                {spill.note}
              </div> :
              undefined
            }
        </div>
        <div className="container">
          <h2 className="pt-5 pb-2 text-center">Sea species</h2>
          <BarChart width={1000} height={400} data={data} margin={{top: 20, right: 20, left: 70, bottom: 20}}>
            <XAxis dataKey="year" stroke='#11265B'/>
            <YAxis stroke='#11265B'/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip wrapperStyle={{ color:'#11265B'}}/>
            <Legend wrapperStyle={{ backgroundColor: '#f5f5f5', color:'#11265B', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
            {lis}
          </BarChart>
        </div>
        {this.props.singleSpillStore.seafood_production.length !== 0 ?
        <div className="container">
          <h2 className="pt-5 pb-2 text-center">Seafood production</h2>
          <AreaChart width={1000} height={400} data={seafood_production} margin={{top: 20, right: 20, left: 70, bottom: 20}}>
            <XAxis dataKey="time" stroke='#473220'/>
            <YAxis stroke='#473220'/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip content={<SeafoodProductionTooltip />} wrapperStyle={{ padding:10, backgroundColor: '#FFFFFF', color:'#473220' }}/>
            <Area type='monotone' dataKey='amount' stroke='#473220' fill='#a16d41' activeDot={{r: 6}}/>
          </AreaChart>
        </div>
          :
          undefined
        }
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
        {this.props.singleSpillStore.tourism_arrival.length !== 0 ?
        <div className="container">
          <h2 className="pt-5 pb-2 text-center">Tourist arrivals</h2>
          <AreaChart width={1000} height={400} data={tourism_arrival} margin={{top: 20, right: 20, left: 70, bottom: 20}}>
            <XAxis dataKey="time" stroke='#11265B'/>
            <YAxis stroke='#11265B'/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip content={<TouristArrivalsTooltip />} wrapperStyle={{ padding:10, backgroundColor: '#FFFFFF', color:'#11265B' }}/>
            <Area type="monotone" dataKey="amount" stroke="#11265B" fill='#F0F8FF' activeDot={{r: 6}}/>
          </AreaChart>
        </div>
          :
          undefined
        }
        {this.props.singleSpillStore.tourism_expenditures.length !== 0 ?
        <div className="container">
          <h2 className="pt-5 pb-2 text-center">Tourism expenditures</h2>
          <ComposedChart width={1000} height={400} data={tourism_expenditures} margin={{top: 20, right: 20, bottom: 20, left: 70}}>
            <XAxis dataKey="time" stroke='#473220'/>
            <YAxis stroke='#473220'/>
            <Tooltip content={<TourismExpendituresTooltip />} wrapperStyle={{ padding:10, backgroundColor: '#FFFFFF', color:'#473220' }}/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Bar dataKey='amount' fill='#a16d41' stroke='#473220'/>
            <Line type='monotone' dataKey='amount' stroke='#ff7300'/>
          </ComposedChart>
        </div>
          :
          undefined
        }
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

export function SeafoodProductionTooltip(props) {
  if (props.active) {
    const { payload } = props;
    var tooltip = "";
    if (payload !== null) {
      const value = payload[0].value * 1000;
      tooltip = "In " + payload[0].payload.time + ", this country produced " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " tonnes seafood"
    }
    return (
      <div className='custom-tooltip'>
        {tooltip}
      </div>
    );
  }
  return null;
}

export function TouristArrivalsTooltip(props) {
  if (props.active) {
    const { payload } = props;
    var tooltip = "";
    if (payload !== null){
      tooltip = "In " + payload[0].payload.time + ", " + payload[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " people were visiting this country"
    }
    return (
      <div className='custom-tooltip'>
        {tooltip}
      </div>
    );
  }
  return null;
}

export function TourismExpendituresTooltip(props) {
  if (props.active) {
    const { payload } = props;
    var tooltip = "";
    if (payload !== null) {
      tooltip = "In " + payload[0].payload.time + ", tourists spent " + payload[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " US$ in this country"
    }
    return (
      <div className='custom-tooltip'>
        {tooltip}
      </div>
    );
  }
  return null;
}
