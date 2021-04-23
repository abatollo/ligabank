const ActionType = {
  CHANGE_SOURCE_CURRENCY_VALUE: `CHANGE_SOURCE_CURRENCY_VALUE`,
  CHANGE_SOURCE_CURRENCY: `CHANGE_SOURCE_CURRENCY`,
  CHANGE_TARGET_CURRENCY_VALUE: `CHANGE_TARGET_CURRENCY_VALUE`,
  CHANGE_TARGET_CURRENCY: `CHANGE_TARGET_CURRENCY`,
  CHANGE_DATE: `CHANGE_DATE`
};

const ActionCreator = {
  changeSourceCurrencyValue: (payload) => ({
    type: ActionType.CHANGE_SOURCE_CURRENCY_VALUE,
    payload
  }),
  changeSourceCurrency: (payload) => ({
    type: ActionType.CHANGE_SOURCE_CURRENCY,
    payload
  }),
  changeTargetCurrencyValue: (payload) => ({
    type: ActionType.CHANGE_TARGET_CURRENCY_VALUE,
    payload
  }),
  changeTargetCurrency: (payload) => ({
    type: ActionType.CHANGE_TARGET_CURRENCY,
    payload
  }),
  changeDate: (payload) => ({
    type: ActionType.CHANGE_DATE,
    payload
  })
};

export {ActionType, ActionCreator};
