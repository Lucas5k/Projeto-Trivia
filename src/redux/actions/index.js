import { getAvatar, getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';
const GET_AVATAR = 'GET_AVATAR';

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
  actionGetAvatar,
  GET_AVATAR,
};
