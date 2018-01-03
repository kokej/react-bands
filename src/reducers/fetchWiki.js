export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_WIKI_FULFILLED':
      return {
        ...state,
        band: action.payload
      };

    default:
      return state;
  }
};
