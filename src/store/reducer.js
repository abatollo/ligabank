import {ActionType} from './action';

const initialState = {
  sourceCurrencyAmount: 1000,
  sourceCurrencyCode: `RUB`,
  targetCurrencyAmount: 13.1254,
  targetCurrencyCode: `USD`,
  date: new Date(),
  convertionHistory: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SOURCE_CURRENCY_AMOUNT:
      return {
        ...state,
        sourceCurrencyAmount: action.payload,
      };
    case ActionType.CHANGE_SOURCE_CURRENCY_CODE:
      return {
        ...state,
        sourceCurrencyCode: action.payload,
      };
    case ActionType.CHANGE_TARGET_CURRENCY_AMOUNT:
      return {
        ...state,
        targetCurrencyAmount: action.payload,
      };
    case ActionType.CHANGE_TARGET_CURRENCY_CODE:
      return {
        ...state,
        targetCurrencyCode: action.payload,
      };
    case ActionType.CHANGE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ActionType.SAVE_TO_HISTORY:
      return {
        ...state,
        convertionHistory: [...state.convertionHistory, action.payload],
      };
    default:
      return state;
  }
};

export {reducer};
