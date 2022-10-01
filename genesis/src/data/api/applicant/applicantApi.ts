import * as T from "../apiTypes";
import { getAccessToken } from "src/utils/token";
import { getRequest, authorization } from "../default/default";
import uri from "../uri";

export const getApplicantsListApi = async (
  access_token: string,
  payload: T.GetApplicantsListPayload
) => {
  return await getRequest().get<T.GetApplicantsListResponse>(uri.applicants, {
    headers: authorization(getAccessToken()),
    params: payload,
  });
};

export const getApplicantInfoApi = async (
  access_token: string,
  payload: T.GetApplicantInfoPayload
) => {
  try {
    const request = getRequest();
    return await request.get(uri.applicant + `/${payload.receipt_code}`, {
      headers: authorization(getAccessToken()),
    });
  } catch (error) {
    throw error;
  }
};

export const updateApplicantStatusApi = async (
  access_token: string,
  payload: T.UpdateApplicantStatusPayload
) => {
  try {
    const request = getRequest();

    await request.patch(
      uri.applicant_arrived +
        `/${
          payload.receipt_code
        }?is_prints_arrived=${!payload.is_prints_arrived}`,
      null,
      {
        headers: authorization(getAccessToken()),
        params: payload,
      }
    );
  } catch (error) {
    throw error;
  }
};

export const updateApplicantPaidStatusApi = async (
  access_token: string,
  payload: T.UpdateApplicantPaidStatusPayload
) => {
  try {
    const request = getRequest();

    await request.patch(uri.applicant_paid + `/${payload.receipt_code}`, null, {
      headers: authorization(getAccessToken()),
      params: payload,
    });
  } catch (error) {
    throw error;
  }
};

export const updateApplicantSubmitStatusApi = async (
  access_token: string,
  payload: T.UpdateApplicantSubmitStatusPayload
) => {
  try {
    const request = getRequest();

    await request.patch(
      uri.applicant_submitted + `/${payload.receipt_code}`,
      null,
      {
        headers: authorization(getAccessToken()),
      }
    );
  } catch (error) {
    throw error;
  }
};

export const checkPasswordApi = async (
  access_token: string,
  payload: T.CheckPasswordRequest
) => {
  try {
    const request = getRequest();
    await request.post(
      uri.checkPassword,
      {
        password: payload.password,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const deleteApplicantTableApi = async (access_token: string) => {
  try {
    const request = getRequest();
    await request.delete(uri.delete_table, {
      headers: authorization(getAccessToken()),
    });
  } catch (error) {
    throw error;
  }
};
