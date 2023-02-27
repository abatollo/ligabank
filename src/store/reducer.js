import {ActionType} from './action';

import {HISTORY_LENGTH} from '../const/history-length';

const initialState = {
  sourceCurrencyAmount: 1000,
  sourceCurrencyCode: `RUB`,
  targetCurrencyAmount: 0,
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
        convertionHistory: [action.payload, ...state.convertionHistory.splice(0, HISTORY_LENGTH - 1)],
      };
    case ActionType.DELETE_HISTORY:
      return {
        ...state,
        convertionHistory: [],
      };
    default:
      return state;
  }
};

export {reducer};
