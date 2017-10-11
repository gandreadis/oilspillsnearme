import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import Navbar from "./components/navigation/Navbar";
import NotFound from "./components/NotFound/NotFound";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/map" exact component={Home}/>
        <Route path="/take-action" exact component={Home}/>
        <Route path="/about" exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
