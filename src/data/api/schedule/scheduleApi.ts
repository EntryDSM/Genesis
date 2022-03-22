import * as T from '../apiTypes';
import { getAccessToken } from "src/utils/token";
import { getRequest, authorization } from "../default/default";
import uri from "../uri";

export const getScheduleApi = async () => {
    const response = await getRequest().get<T.GetSchedulesResponse>(uri.schedules);
  
    return response;
  }
  
  export const updateScheduleApi = async (access_token: string, payload: T.UpdateScheduleStatusPayload) => {
    try {
      const request = getRequest();
  
      await request.patch(uri.schedules , payload, {
      headers: authorization(getAccessToken()),
    });
    } catch (error) {
      throw error;
    }
  }