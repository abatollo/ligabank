import {ActionCreator} from './action';

const convertFromSourceToTarget = () => (dispatch, _getState, api) => {
  const sourceCurrency = _getState().sourceCurrency;
  const targetCurrency = _getState().targetCurrency;
  const sourceCurrencyValue = _getState().sourceCurrencyValue;
  api.get(`?q=${sourceCurrency}_${targetCurrency}&compact=ultra&apiKey=a775d2010358ce1dbe61`).then(({data}) => {
    const pair = `${sourceCurrency}_${targetCurrency}`;
    dispatch(ActionCreator.changeTargetCurrencyValue(sourceCurrencyValue * data[pair]));
  });
};

const convertFromTargetToSource = () => (dispatch, _getState, api) => {
  const targetCurrency = _getState().targetCurrency;
  const sourceCurrency = _getState().sourceCurrency;
  const targetCurrencyValue = _getState().targetCurrencyValue;
  api.get(`?q=${targetCurrency}_${sourceCurrency}&compact=ultra&apiKey=a775d2010358ce1dbe61`).then(({data}) => {
    const pair = `${targetCurrency}_${sourceCurrency}`;
    dispatch(ActionCreator.changeSourceCurrencyValue(targetCurrencyValue * data[pair]));
  });
};

export {convertFromSourceToTarget, convertFromTargetToSource};
