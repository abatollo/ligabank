import {ActionType} from './action';

const initialState = {
  sourceCurrencyValue: 1000,
  sourceCurrency: `RUB`,
  targetCurrencyValue: 13.1254,
  targetCurrency: `USD`,
  date: new Date()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SOURCE_CURRENCY_VALUE:
      return {
        ...state,
        sourceCurrencyValue: action.payload,
      };
    case ActionType.CHANGE_SOURCE_CURRENCY:
      return {
        ...state,
        sourceCurrency: action.payload,
      };
    case ActionType.CHANGE_TARGET_CURRENCY_VALUE:
      return {
        ...state,
        targetCurrencyValue: action.payload,
      };
    case ActionType.CHANGE_TARGET_CURRENCY:
      return {
        ...state,
        targetCurrency: action.payload,
      };
    case ActionType.CHANGE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
