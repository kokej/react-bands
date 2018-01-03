import { ajax } from 'rxjs/observable/dom/ajax';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import { WIKI_URL } from '../constants';

export const fetchWikiEpic = action$ =>
  action$.ofType('FETCH_WIKI')
    .mergeMap(action =>
      superagent('get', WIKI_URL)
        .query({
          titles: action.payload,
          action: 'query',
          format: 'json',
          prop: 'extracts',
          exintro: 'true'
        })
        .use(jsonp({callbackName: ''}))
        .then(function(res){
          let parseRes;
          if(res.body){
            let obj = res.body.query.pages;
            parseRes = obj[Object.keys(obj)[0]];
          }
          return {
            type: 'FETCH_WIKI_FULFILLED',
            payload: parseRes || ''
          }
        })
        .catch(function(error){
          console.log('error fetching wikipedia data --> ', error);
        })
      )
