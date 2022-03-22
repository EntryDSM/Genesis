import * as T from '../apiTypes';
import { getAccessToken } from "src/utils/token";
import { getRequest, authorization } from "../default/default";
import uri from "../uri";

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
  