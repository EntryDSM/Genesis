import * as T from "../apiTypes";
import { getAccessToken } from "src/utils/token";
import { getRequest, authorization } from "../default/default";
import uri from "../uri";

export const getScheduleApi = async () => {
  return await getRequest().get<T.GetSchedulesResponse>(uri.schedule);
};

export const updateScheduleApi = async (
  access_token: string,
  payload: T.UpdateScheduleStatusPayload
) => {
  try {
    const request = getRequest();

    await request.patch(uri.schedule, payload, {
      headers: authorization(getAccessToken()),
    });
  } catch (error) {
    throw error;
  }
};
