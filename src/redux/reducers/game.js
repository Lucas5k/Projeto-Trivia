import { GET_QUESTIONS, NEXT_ROUND, QUESTION_CHOSEN } from '../actions';

const INITIAL_STATE = {
  questions: [],
  round: 0,
  questionChosen: false,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  case QUESTION_CHOSEN:
    return {
      ...state,
      questionChosen: true,
    };
  case NEXT_ROUND:
    return {
      ...state,
      round: state.round + 1,
    };
  default:
    return state;
  }
};

export default game;
