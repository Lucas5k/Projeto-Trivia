import { GET_QUESTIONS, QUESTION_CHOSEN } from '../actions';

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
  default:
    return state;
  }
};

export default game;
