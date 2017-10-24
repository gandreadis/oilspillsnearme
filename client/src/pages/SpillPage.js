import {inject, observer} from "mobx-react";
import React from 'react';
import {Helmet} from "react-helmet";
import {Link, Redirect} from "react-router-dom";
import PageHeader from "../components/navigation/PageHeader";
import { ComposedChart, LineChart, BarChart, AreaChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

var randomColor = require('randomcolor');

const seafoodProduction = [
  {year: 1970, value: 8},
  {year: 1990, value: 8},
  {year: 2000, value: 11},
  {year: 2005, value: 15},
  {year: 2010, value: 18},
  {year: 2011, value: 16},
  {year: 2013, value: 15},
];

const touristArrivals = [
  {year: 2000, value: 317000},
  {year: 2005, value: 748000},
  {year: 2010, value: 2417000},
  {year: 2011, value: 2932000},
  {year: 2012, value: 3514000},
  {year: 2013, value: 3256000},
  {year: 2014, value: 3673000},
  {year: 2015, value: 4131000},
]

const tourismExpenditures = [
  {year: 2010, value: 108000000},
  {year: 2011, value: 269000000},
  {year: 2012, value: 103000000},
  {year: 2013, value: 137000000},
  {year: 2014, value: 145000000},
  {year: 2015, value: 135000000},
]

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
          <title>{spill.name} - oilspillsnear.me</title>
        </Helmet>
        <PageHeader>
          {spill.name}
        </PageHeader>
        <div>
          <h2>Sea species</h2>
          <BarChart width={1200} height={400} data={data} margin={{top: 20, right: 20, left: 70, bottom: 20}}>
            <XAxis dataKey="year" stroke='#11265B'/>
            <YAxis stroke='#11265B'/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip wrapperStyle={{ color:'#11265B'}}/>
            <Legend wrapperStyle={{ backgroundColor: '#f5f5f5', color:'#11265B', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
            {lis}
          </BarChart>
        </div>
        <div>
          <h2>Seafood production</h2>
          <AreaChart width={1200} height={400} data={seafoodProduction} margin={{top: 20, right: 20, left: 70, bottom: 20}}>
            <XAxis dataKey="year" stroke='#473220'/>
            <YAxis stroke='#473220'/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip content={<SeafoodProductionTooltip />} wrapperStyle={{ padding:10, backgroundColor: '#FFFFFF', color:'#473220' }}/>
            <Area type='monotone' dataKey='value' stroke='#473220' fill='#a16d41' />
          </AreaChart>
        </div>
        <div>
          <h2>Beaches</h2>
        </div>
        <div>
          <h3>Tourist arrivals</h3>
          <LineChart width={1200} height={400} data={touristArrivals} margin={{top: 20, right: 20, left: 70, bottom: 20}}>
            <XAxis dataKey="year" stroke='#11265B'/>
            <YAxis stroke='#11265B'/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip content={<TouristArrivalsTooltip />} wrapperStyle={{ padding:10, backgroundColor: '#FFFFFF', color:'#11265B' }}/>
            <Line type="monotone" dataKey="value" stroke="#11265B" activeDot={{r: 8}}/>
          </LineChart>
        </div>
        <div>
          <h3>Tourism expenditures</h3>
          <ComposedChart width={1200} height={400} data={tourismExpenditures} margin={{top: 20, right: 20, bottom: 20, left: 70}}>
            <XAxis dataKey="year" stroke='#473220'/>
            <YAxis stroke='#473220'/>
            <Tooltip content={<TourismExpendituresTooltip />} wrapperStyle={{ padding:10, backgroundColor: '#FFFFFF', color:'#473220' }}/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Bar dataKey='value' fill='#a16d41' stroke='#473220'/>
            <Line type='monotone' dataKey='value' stroke='#ff7300'/>
          </ComposedChart>
        </div>
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

export function SeafoodProductionTooltip(props) {
  if (props.active) {
    const { payload } = props;
    const value = payload[0].value * 1000
    const tooltip = "In " + payload[0].payload.year + ", this country produced " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " tonnes seafood"
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
    const tooltip = "In " + payload[0].payload.year + ", " + payload[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " people were coming to visit the country."
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
    const tooltip = "In " + payload[0].payload.year + ", tourists spent " + payload[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " US$"
    return (
      <div className='custom-tooltip'>
        {tooltip}
      </div>
    );
  }

  return null;
}
