import { getQuestions, getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';

const GET_QUESTION = 'GET_QUESTION';

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

function actionGetQuestion() {
  return async (dispatch) => {
    const token = await getToken();
    console.log(token);
    const question = await getQuestions(token);
    console.log(question);
    dispatch({
      type: GET_QUESTION,
      question,
    });
  };
}

export {
  actionGetToken,
  GET_TOKEN,
  actionUpdatePlayerData,
  UPDATE_PLAYER_DATA,
  GET_QUESTION,
  actionGetQuestion,
};
