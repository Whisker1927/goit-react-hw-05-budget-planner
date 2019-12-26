import types from './type';

export const addBudget = value => {
  return {
    type: types.ADD_BUDGET,
    payload: {
      value: Number(value),
    },
  };
};

export const addExpense = expenses => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      value: expenses,
    },
  };
};

export const removeExpense = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};
