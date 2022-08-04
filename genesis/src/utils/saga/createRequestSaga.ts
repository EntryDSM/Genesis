import { call, put } from 'redux-saga/effects';
import { responseGenerator } from 'src/data/api/apiTypes';
import { refreshTokenApi } from 'src/data/api/signin/signinApi';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action: any) {
    const accessToken = localStorage.getItem('access_token');
    try {
      const response: responseGenerator = yield call(request, accessToken, action.payload);
      yield put({
        type: SUCCESS,
        payload: response ? response.data : null,
      });
    } catch (error: any) {
      if (error.response?.data) {
        yield put({
          type: FAILURE,
          payload: { ...error.response.data, type },
        });
      // } if (error.response?.error.status === 401) {
      //   const response: { access_token: string } = yield call(refreshTokenApi);
      //   yield put({
      //     type: SUCCESS,
      //     payload: response ? response : '',
      //   });
      //   localStorage.setItem('access_token', response.access_token);
      // } if (error.response?.error.status === 403) {
      //   const response: { access_token: string } = yield call(refreshTokenApi);
      //   yield put({
      //     type: SUCCESS,
      //     payload: response ? response : '',
      //   });
      //   localStorage.setItem('access_token', response.access_token);
      } else {
        yield put({
          type: FAILURE,
          payload: {
            message: `Network Error`,
            status: 500,
          },
        });
      }
    }
  };
}
