import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'src/utils/saga/createRequestSaga';
import { getApplicantsListApi, getApplicantInfoApi, updateApplicantStatusApi, updateApplicantPaidStatusApi, updateApplicantSubmitStatusApi, checkPasswordApi, deleteApplicantTableApi } from 'src/data/api/applicant/applicantApi';
import { GET_APPLICANTS_LIST, GET_APPLICANT_INFO, UPDATE_APPLICANT_STATUS, UPDATE_APPLICANT_PAID_STATUS, UPDATE_APPLICANT_SUBMIT_STATUS, CHECK_PASSWORD, DELETE_APPLICANT_TABLE } from 'src/data/modules/redux/action/applicant/interface';

export const getApplicantListSaga = createRequestSaga(GET_APPLICANTS_LIST, getApplicantsListApi);
export const getApplicantInfoSaga = createRequestSaga(GET_APPLICANT_INFO, getApplicantInfoApi);
export const updateApplicantStatusSaga = createRequestSaga(UPDATE_APPLICANT_STATUS, updateApplicantStatusApi);
export const updateApplicantPaidStatusSaga = createRequestSaga(UPDATE_APPLICANT_PAID_STATUS, updateApplicantPaidStatusApi);
export const updateApplicantSubmitStatusSaga = createRequestSaga(UPDATE_APPLICANT_SUBMIT_STATUS, updateApplicantSubmitStatusApi);
export const checkPasswordSaga = createRequestSaga(CHECK_PASSWORD, checkPasswordApi);
export const deleteApplicantTableSaga = createRequestSaga(DELETE_APPLICANT_TABLE, deleteApplicantTableApi);

function* applicantSaga() {
  yield takeLatest(GET_APPLICANTS_LIST, getApplicantListSaga);
  yield takeLatest(GET_APPLICANT_INFO, getApplicantInfoSaga);
  yield takeLatest(UPDATE_APPLICANT_STATUS, updateApplicantStatusSaga);
  yield takeLatest(UPDATE_APPLICANT_PAID_STATUS, updateApplicantPaidStatusSaga);
  yield takeLatest(UPDATE_APPLICANT_SUBMIT_STATUS, updateApplicantSubmitStatusSaga);
  yield takeLatest(CHECK_PASSWORD, checkPasswordSaga);
  yield takeLatest(DELETE_APPLICANT_TABLE, deleteApplicantTableSaga);
}

export default applicantSaga;
