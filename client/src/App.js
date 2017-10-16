import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/navigation/Navbar";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar/>
      <div className="app-content">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/map" exact component={MapPage}/>
          <Route path="/take-action" exact component={HomePage}/>
          <Route path="/about" exact component={HomePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
