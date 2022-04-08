import { GET_AVATAR, UPDATE_PLAYER_DATA, QUESTION_CHOSEN, RESET_GAME } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  avatar: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_PLAYER_DATA:
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    };
  case GET_AVATAR:
    return {
      ...state,
      avatar: action.avatar,
    };
  case QUESTION_CHOSEN:
    return {
      ...state,
      score: state.score + action.score,
      assertions: state.assertions + action.assertion,
    };
  case RESET_GAME:
    return INITIAL_STATE;
  default:
    return state;
  }
};

export default player;
