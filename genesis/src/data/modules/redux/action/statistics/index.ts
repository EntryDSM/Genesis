import { error } from 'src/models/error';
import { 
  GET_STATISTICS, 
  GET_STATISTICS_SUCCESS, 
  GET_STATISTICS_FAILURE 
} from "./interface";
import { 
  GetCountStatisticsResponse, 
  GetScoreStatisticsResponse, 
} from "src/data/api/apiTypes";

export const getStatisticsSuccess = (payload: {
  score:GetScoreStatisticsResponse,
  count:GetCountStatisticsResponse
}) => ({
  type: GET_STATISTICS_SUCCESS,
  payload,
})

export const getStatisticsFailure = (payload: error) => ({
  type: GET_STATISTICS_FAILURE,
  payload,
})

export const getStatistics = () => ({
  type: GET_STATISTICS,
})

export type statisticsActionType = 
  | ReturnType<typeof getStatisticsSuccess>
  | ReturnType<typeof getStatisticsFailure>
  | ReturnType<typeof getStatistics>;