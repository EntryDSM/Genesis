import * as T from '../apiTypes';
import { getAccessToken } from "src/utils/token";
import { getRequest, authorization } from "../default/default";
import uri from "../uri";

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
  