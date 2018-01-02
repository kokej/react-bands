import { combineEpics } from 'redux-observable';
import { pingEpic } from './pingEpic';
import { fetchWikiEpic } from './fetchWikiEpic';
import { fetchUserEpic } from './fetchUserEpic';

export default combineEpics(
  pingEpic,
  fetchWikiEpic,
  fetchUserEpic
);
