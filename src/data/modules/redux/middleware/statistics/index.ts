import { call, takeLatest, put } from 'redux-saga/effects';
import { getStatisticsApi } from 'src/data/api/index';
import { GET_STATISTICS } from "src/data/modules/redux/action/statistics/interface";

// export const getStatisticsSaga = createRequestSaga(GET_STATISTICS, getStatisticsApi);

export function* getStatisticsSaga() {
  const type = 'statistics/GET_STATISTICS';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
    try {
      const response = yield call(getStatisticsApi);
      yield put({
        type: SUCCESS,
        payload: response ? response : null,
      });
    } catch (e) {
      if (e.response?.data) {
        yield put({
          type: FAILURE,
          payload: { ...e.response.data, type },
        });
      } else {
        yield put({
          type: FAILURE,
          payload: {
            message: `Network Error`,
            status: 500,
          },
        });
      }
  };
}

function* statisticsSaga() {
  yield takeLatest(GET_STATISTICS, getStatisticsSaga);
}

export default statisticsSaga;