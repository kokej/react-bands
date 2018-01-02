export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_WIKI_FULFILLED':
      return {
        ...state,
        [action.payload]: action.payload
      };

    default:
      return state;
  }
};
