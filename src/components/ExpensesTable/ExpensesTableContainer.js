import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as actions from '../../redux/budget/action';
import * as selects from '../../redux/budget/select';

const mapStateToProps = state => ({
  items: selects.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
