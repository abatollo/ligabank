import {API_KEY} from '../const/api-key';

import {ActionCreator} from './action';

import {roundFourDecimals} from '../utils/round-four-decimals';

const convertFromSourceToTarget = () => (dispatch, _getState, api) => {
  const sourceCurrencyCode = _getState().sourceCurrencyCode;
  const targetCurrencyCode = _getState().targetCurrencyCode;
  const sourceCurrencyAmount = _getState().sourceCurrencyAmount;
  const date = _getState().date.toISOString().slice(0,10);
  api.get(`?q=${sourceCurrencyCode}_${targetCurrencyCode}&compact=ultra&date=${date}&apiKey=${API_KEY}`).then(({data}) => {
    const pair = `${sourceCurrencyCode}_${targetCurrencyCode}`;
    console.log(data[pair][date]);
    dispatch(ActionCreator.changeTargetCurrencyAmount(roundFourDecimals(sourceCurrencyAmount * data[pair][date])));
  });
};

const convertFromTargetToSource = () => (dispatch, _getState, api) => {
  const targetCurrencyCode = _getState().targetCurrencyCode;
  const sourceCurrencyCode = _getState().sourceCurrencyCode;
  const targetCurrencyAmount = _getState().targetCurrencyAmount;
  const date = _getState().date.toISOString().slice(0,10);
  api.get(`?q=${targetCurrencyCode}_${sourceCurrencyCode}&compact=ultra&date=${date}&apiKey=${API_KEY}`).then(({data}) => {
    const pair = `${targetCurrencyCode}_${sourceCurrencyCode}`;
    dispatch(ActionCreator.changeSourceCurrencyAmount(roundFourDecimals(targetCurrencyAmount * data[pair][date])));
  });
};

export {convertFromSourceToTarget, convertFromTargetToSource};
