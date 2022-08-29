import { useDispatch } from "react-redux";
import { useSelectState } from "../default";
import {
  setFilter,
  getApplicantsList,
  getApplicantInfo,
  updateApplicantStatus,
  updateApplicantPaidStatus,
  updateApplicantSubmitStatus,
  setPassword,
  checkPassword,
  deleteApplicantTable,
} from "src/data/modules/redux/action/applicant";
import {
  GetApplicantsListPayload,
  GetApplicantInfoPayload,
  UpdateApplicantStatusPayload,
  UpdateApplicantPaidStatusPayload,
  UpdateApplicantSubmitStatusPayload,
  CheckPasswordRequest,
} from "src/data/api/apiTypes";

const useApplicant = () => {
  const dispatch = useDispatch();
  const state = useSelectState().applicant;
  const setState = {
    setFilter: (payload: GetApplicantsListPayload) =>
      dispatch(setFilter(payload)),
    getApplicantsList: (payload: GetApplicantsListPayload) =>
      dispatch(getApplicantsList(payload)),
    getApplicantInfo: (payload: GetApplicantInfoPayload) =>
      dispatch(getApplicantInfo(payload)),
    updateApplicantStatus: (payload: UpdateApplicantStatusPayload) =>
      dispatch(updateApplicantStatus(payload)),
    updateApplicantPaidStatus: (payload: UpdateApplicantPaidStatusPayload) =>
      dispatch(updateApplicantPaidStatus(payload)),
    updateApplicantSubmitStatus: (
      payload: UpdateApplicantSubmitStatusPayload
    ) => dispatch(updateApplicantSubmitStatus(payload)),
    checkPassword: (payload: CheckPasswordRequest) =>
      dispatch(checkPassword(payload)),
    deleteApplicantTable: () => dispatch(deleteApplicantTable()),
  };
  return {
    state,
    setState,
  };
};

export default useApplicant;
