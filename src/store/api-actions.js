import {API_KEY} from '../const/api-key';

import {ActionCreator} from './action';

import {roundFourDecimals} from '../utils/round-four-decimals';

const convertFromSourceToTarget = () => (dispatch, _getState, api) => {
  const sourceCurrencyCode = _getState().sourceCurrencyCode;
  const targetCurrencyCode = _getState().targetCurrencyCode;
  const sourceCurrencyAmount = _getState().sourceCurrencyAmount;
  const date = _getState().date.toISOString().slice(0,10);
  api.get(`/historical/${date}.json?app_id=${API_KEY}`).then(({data}) => {
    const targetCurrencyAmount = sourceCurrencyAmount / data.rates[sourceCurrencyCode] * data.rates[targetCurrencyCode];
    dispatch(ActionCreator.changeTargetCurrencyAmount(roundFourDecimals(targetCurrencyAmount)));
  });
};

const convertFromTargetToSource = () => (dispatch, _getState, api) => {
  const targetCurrencyCode = _getState().targetCurrencyCode;
  const sourceCurrencyCode = _getState().sourceCurrencyCode;
  const targetCurrencyAmount = _getState().targetCurrencyAmount;
  const date = _getState().date.toISOString().slice(0,10);
  api.get(`/historical/${date}.json?app_id=${API_KEY}`).then(({data}) => {
    const sourceCurrencyAmount = targetCurrencyAmount / data.rates[targetCurrencyCode] * data.rates[sourceCurrencyCode];
    dispatch(ActionCreator.changeSourceCurrencyAmount(roundFourDecimals(sourceCurrencyAmount)));
  });
};

export {convertFromSourceToTarget, convertFromTargetToSource};
