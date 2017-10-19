import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/navigation/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";
import SpillPage from "./pages/SpillPage";
import TakeActionPage from "./pages/TakeActionPage";

const SpillPageComponent = ({match}) => <SpillPage spillId={match.params.spillId}/>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar/>
      <div className="app-content">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/map" exact component={MapPage}/>
          <Route path="/spill/:spillId" exact component={SpillPageComponent}/>
          <Route path="/take-action" exact component={TakeActionPage}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
