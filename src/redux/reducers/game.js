import { GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
  round: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return action.questions;
  default:
    return state;
  }
};

export default player;
