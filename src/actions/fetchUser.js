export function fetchUser(username) {
  return {
    type: 'FETCH_USER',
    payload: username
  }
}

export function fetchUserFulfilled(payload) {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: payload
  }
}
