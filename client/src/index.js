import {Provider} from "mobx-react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import countryRigStore from "./stores/CountryRigStore";

import spillStore from "./stores/SpillStore";

const stores = {
  spillStore,
  countryRigStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
