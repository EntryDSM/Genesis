import { error } from "src/models/error";
import {
  GetCountStatisticsResponse,
  GetScoreStatisticsResponse,
} from "../../../../../api/apiTypes";

export interface IStatisticsState {
  statistics: statisticsType;
  error: error;
}

export interface statisticsType {
  count: GetCountStatisticsResponse;
  score: GetScoreStatisticsResponse;
}
