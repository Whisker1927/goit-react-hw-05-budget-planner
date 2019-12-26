import { combineReducers } from 'redux';
import { budgetReducer, expenseReducer } from './budget/reducer';

const rootReducers = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});

export default rootReducers;
