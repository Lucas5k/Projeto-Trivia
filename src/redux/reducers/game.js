import { FINISH_TIMER, GET_QUESTIONS, NEXT_ROUND, QUESTION_CHOSEN } from '../actions';

const INITIAL_STATE = {
  questions: [],
  round: 0,
  questionChosen: false,
  timerFinished: false,
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
  case FINISH_TIMER:
    return {
      ...state,
      timerFinished: true,
    };
  case NEXT_ROUND:
    return {
      ...state,
      round: state.round + 1,
      timer: 30,
    };
  default:
    return state;
  }
};

export default game;
