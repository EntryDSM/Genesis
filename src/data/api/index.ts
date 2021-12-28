import uri from './uri';
import * as T from './apiTypes';
import { getRequest } from './default/default';
import { getAccessToken } from 'src/utils/token';
import { signinRequest } from 'src/models/dto/request/signinRequest';
import { refreshResponse, signinResponse } from 'src/models/dto/response/signinResponse';

const authorization = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Cache-Control': 'no-cache',
});

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
    const response: any = await request.put<refreshResponse>(
      uri.signin,
      {},
      {
        headers: {
          'x-refresh-token': localStorage.getItem('refresh_token') as string,
        },
      },
    );
    localStorage.setItem('access_token', response.access_token);
    return response;
  } catch (error) {
    throw error;
  }
};

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

export const getStatisticsApi = async () => {
  const response1 = await getRequest().get<T.GetCountStatisticsResponse>(
    uri.count ,
     {
       headers: authorization(getAccessToken()),
     },
   );
     const response2 = await getRequest().get<T.GetScoreStatisticsResponse>(
      uri.score ,
       {
         headers: authorization(getAccessToken()),
       },
     );
       const result:T.StaticDistribution = {count:response1.data,score:response2.data}; 
       console.log('statics:',result)
  return result;
};

export const getApplicantsListApi = async (access_token: string, payload: T.GetApplicantsListPayload) => {
  const response = await getRequest().get<T.GetApplicantsListResponse>(
   uri.applicants,
    {
      headers: authorization(getAccessToken()),
      params: payload,
    },
  );

  return response;
};

export const getApplicantInfoApi = async (access_token: string, payload: T.GetApplicantInfoPayload) => {
  try {
    const request = getRequest();
    return await request.get(uri.applicant+`/${payload.receipt_code}`, {
      headers: authorization(getAccessToken()),
    })
  } catch (error) {
    throw error;
  }
};

export const updateApplicantStatusApi = async (access_token: string, payload: T.UpdateApplicantStatusPayload) => {
  try {
    const request = getRequest();

    await request.patch(uri.applicant_arrived+`/${payload.receipt_code}`, null, {
    headers: authorization(getAccessToken()),
    params: payload,
  });
  } catch (error) {
    throw error;
  }
}

export const updateApplicantPaidStatusApi = async (access_token: string, payload: T.UpdateApplicantPaidStatusPayload) => {
  try {
    const request = getRequest();

    await request.patch(uri.applicant_paid+`/${payload.receipt_code}`, null, {
    headers: authorization(getAccessToken()),
    params: payload,
  });
  } catch (error) {
    throw error;
  }
}

export const updateApplicantSubmitStatusApi = async (access_token: string, payload: T.UpdateApplicantSubmitStatusPayload) => {
  try {
    const request = getRequest();

    await request.patch(uri.applicant_submitted+`/${payload.receipt_code}`, null, {
    headers: authorization(getAccessToken()),
  });
  } catch (error) {
    throw error;
  }
}

export const checkPasswordApi = async (access_token: string, payload: T.CheckPasswordRequest) => {
  try {
    const request = getRequest();
    await request.get(uri.signin, {
      headers: authorization(getAccessToken()),
      params: payload,
    });
  } catch (error) {
    throw error;
  }
}

export const deleteApplicantTableApi = async (access_token: string) => {
  try {
    const request = getRequest();
    await request.delete(uri.delete_table, {
      headers: authorization(getAccessToken()),
    });
  } catch (error) {
    throw error;
  }
}

export const downloadApplicantsListExcel = async () => {
  const response = await getRequest().get(uri.applicants_print , {
    headers: authorization(getAccessToken()),
    responseType: 'blob',
  });

  return response.data;
};

export const downloadAdmissionExcel = async () => {
  const response = await getRequest().get(uri.ticket_print, {
    headers: authorization(getAccessToken()),
    responseType: 'blob',
  });
  
  return response.data;
};
