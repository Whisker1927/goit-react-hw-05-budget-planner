import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as actions from '../../redux/budget/action';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.addBudget(value)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
