import {ActionCreator} from './action';

import {API_KEY} from '../const/api-key';

const convertFromSourceToTarget = () => (dispatch, _getState, api) => {
  const sourceCurrency = _getState().sourceCurrency;
  const targetCurrency = _getState().targetCurrency;
  const sourceCurrencyValue = _getState().sourceCurrencyValue;
  const date = _getState().date.toISOString().slice(0,10);
  api.get(`?q=${sourceCurrency}_${targetCurrency}&compact=ultra&date=${date}&apiKey=${API_KEY}`).then(({data}) => {
    const pair = `${sourceCurrency}_${targetCurrency}`;
    console.log(data[pair][date]);
    dispatch(ActionCreator.changeTargetCurrencyValue(sourceCurrencyValue * data[pair][date]));
  });
};

const convertFromTargetToSource = () => (dispatch, _getState, api) => {
  const targetCurrency = _getState().targetCurrency;
  const sourceCurrency = _getState().sourceCurrency;
  const targetCurrencyValue = _getState().targetCurrencyValue;
  const date = _getState().date.toISOString().slice(0,10);
  api.get(`?q=${targetCurrency}_${sourceCurrency}&compact=ultra&date=${date}&apiKey=${API_KEY}`).then(({data}) => {
    const pair = `${targetCurrency}_${sourceCurrency}`;
    dispatch(ActionCreator.changeSourceCurrencyValue(targetCurrencyValue * data[pair][date]));
  });
};

export {convertFromSourceToTarget, convertFromTargetToSource};
