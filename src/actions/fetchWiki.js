export function fetchWiki(bandName) {
  return {
    type: 'FETCH_WIKI',
    payload: bandName
  }
}

export function fetchWikiFulfilled(payload) {
  return {
    type: 'FETCH_WIKI_FULFILLED',
    payload: payload
  }
}
