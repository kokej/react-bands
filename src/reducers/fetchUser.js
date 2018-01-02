export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload
      };

    default:
      return state;
  }
};
