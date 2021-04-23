import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import {reducer} from './store/reducer';
import reportWebVitals from './reportWebVitals';

import {createAPI} from './services/api';

import './scss/style.scss';

const api = createAPI();

const currencyRates = {
  "22.04.2021": {
    USD: null,
    EUR: null,
    GBR: null,
    CNY: null
  },
  "23.04.2021": {
    USD: null,
    EUR: null,
    GBR: null,
    CNY: null
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

console.log(store);

api.get().then(({data}) => {
  var parser = new DOMParser();
  var parsedData = parser.parseFromString(data, "application/xml");
  currencyRates["23.04.2021"]["USD"] = parsedData.querySelector(`[ID="R01235"] Value`).textContent;
  currencyRates["23.04.2021"]["EUR"] = parsedData.querySelector(`[ID="R01239"] Value`).textContent;
  currencyRates["23.04.2021"]["GBR"] = parsedData.querySelector(`[ID="R01035"] Value`).textContent;
  currencyRates["23.04.2021"]["CNY"] = parsedData.querySelector(`[ID="R01375"] Value`).textContent;
  console.log(currencyRates);
});

ReactDOM.render(
  <Provider store={store}>
    <App props={currencyRates} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
