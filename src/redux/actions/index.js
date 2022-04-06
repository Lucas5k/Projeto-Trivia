import { getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';

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

export {
  actionGetToken,
  GET_TOKEN,
  actionUpdatePlayerData,
  UPDATE_PLAYER_DATA,
};
