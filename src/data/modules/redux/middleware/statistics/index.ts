import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'src/utils/saga/createRequestSaga';
import { getStatisticsApi } from 'src/data/api/index';
import { GET_STATISTICS } from "src/data/modules/redux/action/statistics/interface";

export const getStatisticsSaga = createRequestSaga(GET_STATISTICS, getStatisticsApi);

function* statisticsSaga() {
  yield takeLatest(GET_STATISTICS, getStatisticsSaga);
}

export default statisticsSaga;