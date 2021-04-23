const ActionType = {
  CHANGE_SOURCE_CURRENCY: `CHANGE_SOURCE_CURRENCY`,
  CHANGE_TARGET_CURRENCY: `CHANGE_TARGET_CURRENCY`
};

const ActionCreator = {
  changeSourceCurrency: (payload) => ({
    type: ActionType.CHANGE_SOURCE_CURRENCY,
    payload
  }),
  changeTargetCurrency: (payload) => ({
    type: ActionType.CHANGE_TARGET_CURRENCY,
    payload
  })
};

export {ActionType, ActionCreator};
