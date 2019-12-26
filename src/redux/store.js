import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducer';
import logger from './middleware/logger';

const middleware = [logger];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducers, composeEnhancers);

export default store;
