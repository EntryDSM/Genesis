import { signinRequest } from "src/models/dto/request/signinRequest";
import { signinResponse, refreshResponse } from "src/models/dto/response/signinResponse";
import uri from "src/data/api/uri";
import { getRequest } from "../default/default";

export const signinApi = async (body: signinRequest) => {
    try {
      const request = getRequest();
      const response = await request.post<signinResponse>(uri.signin, body);
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const refreshTokenApi = async () => {
    try {
      const request = getRequest();
      const { data } = await request.put<refreshResponse>(
        uri.signin,
        {},
        {
          headers: {
            'x-refresh-token': localStorage.getItem('refresh_token') as string,
          },
        },
      );
      localStorage.setItem('access_token', data.access_token);
      return data;
    } catch (error) {
      throw error;
    }
  };