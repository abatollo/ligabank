import {ActionType} from './action';

const initialState = {
  sourceCurrency: `RUB`,
  targetCurrency: `USD`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SOURCE_CURRENCY:
      return {
        ...state,
        sourceCurrency: action.payload,
      };    
    case ActionType.CHANGE_TARGET_CURRENCY:
      return {
        ...state,
        targetCurrency: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
