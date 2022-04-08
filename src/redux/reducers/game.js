import { DECREASE_TIMER, GET_QUESTIONS, NEXT_ROUND, QUESTION_CHOSEN } from '../actions';

const INITIAL_STATE = {
  questions: [],
  round: 0,
  questionChosen: false,
  timer: 30,
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
  case DECREASE_TIMER:
    if (state.timer === 0) return state;
    return {
      ...state,
      timer: state.timer - 1,
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
