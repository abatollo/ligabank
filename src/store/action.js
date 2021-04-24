const ActionType = {
  CHANGE_SOURCE_CURRENCY_AMOUNT: `CHANGE_SOURCE_CURRENCY_AMOUNT`,
  CHANGE_SOURCE_CURRENCY_CODE: `CHANGE_SOURCE_CURRENCY_CODE`,
  CHANGE_TARGET_CURRENCY_AMOUNT: `CHANGE_TARGET_CURRENCY_AMOUNT`,
  CHANGE_TARGET_CURRENCY_CODE: `CHANGE_TARGET_CURRENCY_CODE`,
  CHANGE_DATE: `CHANGE_DATE`,
  SAVE_TO_HISTORY: `SAVE_TO_HISTORY`,
  DELETE_HISTORY: `DELETE_HISTORY`
};

const ActionCreator = {
  changeSourceCurrencyAmount: (payload) => ({
    type: ActionType.CHANGE_SOURCE_CURRENCY_AMOUNT,
    payload
  }),
  changeSourceCurrencyCode: (payload) => ({
    type: ActionType.CHANGE_SOURCE_CURRENCY_CODE,
    payload
  }),
  changeTargetCurrencyAmount: (payload) => ({
    type: ActionType.CHANGE_TARGET_CURRENCY_AMOUNT,
    payload
  }),
  changeTargetCurrencyCode: (payload) => ({
    type: ActionType.CHANGE_TARGET_CURRENCY_CODE,
    payload
  }),
  changeDate: (payload) => ({
    type: ActionType.CHANGE_DATE,
    payload
  }),
  saveToHistory: (payload) => ({
    type: ActionType.SAVE_TO_HISTORY,
    payload
  }),
  deleteHistory: () => ({
    type: ActionType.DELETE_HISTORY
  })
};

export {ActionType, ActionCreator};
