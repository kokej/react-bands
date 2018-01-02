import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import count from './reducers/count';
import { createEpicMiddleware } from 'redux-observable';
import pingReducer from './reducers/pingpong';
import fetchUser from './reducers/fetchUser';
import fetchWiki from './reducers/fetchWiki';
import combineEpics from './epics/index';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware(combineEpics);

export default createStore(
  combineReducers({
    count,
    routerReducer,
    pingReducer,
    fetchUser,
    fetchWiki
  }),
  applyMiddleware(createLogger(), historyMiddleware, epicMiddleware)
)

export {history}
