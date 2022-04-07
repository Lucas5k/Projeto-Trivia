import { GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
  round: 0,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  default:
    return state;
  }
};

export default game;
