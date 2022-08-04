import { error } from 'src/models/error';
import { createAction } from 'typesafe-actions';
import { 
  GET_STATISTICS, 
  GET_STATISTICS_SUCCESS, 
  GET_STATISTICS_FAILURE 
} from "./interface";
import { 
  GetCountStatisticsResponse, 
  GetScoreStatisticsResponse, 
} from "src/data/api/apiTypes";

export const getStatistics = createAction(GET_STATISTICS)();
export const getStatisticsSuccess = createAction(GET_STATISTICS_SUCCESS)<{
  score: GetScoreStatisticsResponse, 
  count: GetCountStatisticsResponse
}>();
export const getStatisticsFailure = createAction(GET_STATISTICS_FAILURE)<error>();


export type statisticsActionType = 
  | ReturnType<typeof getStatisticsSuccess>
  | ReturnType<typeof getStatisticsFailure>
  | ReturnType<typeof getStatistics>;