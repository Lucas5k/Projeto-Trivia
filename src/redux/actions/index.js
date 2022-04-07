import { getAvatar, getQuestions, getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';
const GET_AVATAR = 'GET_AVATAR';
const GET_QUESTIONS = 'GET_QUESTIONS';

function actionGetToken() {
  return async (dispatch) => {
    const token = await getToken();
    dispatch({
      type: GET_TOKEN,
      token,
    });
  };
}

function actionUpdatePlayerData({ name, gravatarEmail }) {
  return {
    type: UPDATE_PLAYER_DATA,
    name,
    gravatarEmail,
  };
}

function actionGetQuestions(token) {
  return async (dispatch) => {
    const questions = await getQuestions(token);
    dispatch({
      type: GET_QUESTIONS,
      questions,
    });
  };
}

function actionGetAvatar(email) {
  return async (dispatch) => {
    const avatar = await getAvatar(email);
    dispatch({
      type: GET_AVATAR,
      avatar,
    });
  };
}

export {
  actionGetToken,
  GET_TOKEN,
  actionUpdatePlayerData,
  UPDATE_PLAYER_DATA,
  GET_QUESTIONS,
  actionGetQuestions,
  actionGetAvatar,
  GET_AVATAR,
};
