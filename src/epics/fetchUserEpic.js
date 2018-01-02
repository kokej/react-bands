import { ajax } from 'rxjs/observable/dom/ajax';

export const fetchUserEpic = action$ =>
  action$.ofType('FETCH_USER')
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => {
          return {
            type: 'FETCH_USER_FULFILLED',
            payload: response
          }
        })
    );
