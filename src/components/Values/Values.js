import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import Value from './Value';
import * as selects from '../../redux/budget/select';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget = 0, expenses = 0, balance = 0 }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={selects.getTotalExpensesValue(expenses)} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: T.number.isRequired,
  expenses: T.arrayOf(T.object).isRequired,
  balance: T.number.isRequired,
};

export default Values;
