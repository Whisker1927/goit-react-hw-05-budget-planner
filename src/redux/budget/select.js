export const getBudget = state => state.budget;
export const getExpenses = state => state.expenses;

export const getTotalExpensesValue = expenses => {
  return expenses.reduce((total, value) => total + value.amount, 0);
};

export const calculateBalance = state =>
  getBudget(state) - getTotalExpensesValue(state.expenses);
