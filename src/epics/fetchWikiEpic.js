import { ajax } from 'rxjs/observable/dom/ajax';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import { WIKI_URL } from '../constants';

export const fetchWikiEpic = action$ =>
  action$.ofType('FETCH_WIKI')
    .mergeMap(action =>
      superagent('get', WIKI_URL)
        .query({
          titles: 'queen',
          action: 'query',
          format: 'json',
          prop: 'extracts'
        })
        .use(jsonp({callbackName: ''}))
        .then(function(res){
          return {
            type: 'FETCH_BAND_WIKI_FULFILLED',
            payload: res
          }
        })
        .catch(function(error){
          debugger;
        })
      )
