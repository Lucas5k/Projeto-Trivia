import { GET_QUESTION } from '../actions';

const INITIAL_STATE = {
  results: [],
};

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTION:
    return {
      ...state,
      results: action.question,
    };
  default:
    return state;
  }
};

export default ranking;
