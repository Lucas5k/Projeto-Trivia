import { getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';

function actionGetToken() {
  return async (dispatch) => {
    const token = await getToken();
    dispatch({
      type: GET_TOKEN,
      token,
    });
  };
}

export { actionGetToken, GET_TOKEN };
