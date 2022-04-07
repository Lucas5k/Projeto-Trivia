import { getQuestions, getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';

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

export {
  actionGetToken,
  GET_TOKEN,
  actionUpdatePlayerData,
  UPDATE_PLAYER_DATA,
  GET_QUESTIONS,
  actionGetQuestions,
};
