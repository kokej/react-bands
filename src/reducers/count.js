import { INCREASE, DECREASE } from '../constants'

const initialState = {
  number: 1
}

const count = (state  = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      state = {
        ...state,
        number: state.number + action.payload
      }
    break;
    case DECREASE:
      state = {
        ...state,
        number: state.number - action.payload
      }
    break;
    default:
    break;
  }
  return state;
}

export default count;
