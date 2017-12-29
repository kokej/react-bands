import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import count from './reducers/count'

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

export default createStore(
  combineReducers({
    count,
    routerReducer
  }),
  applyMiddleware(createLogger(), historyMiddleware)
)

export {history}
