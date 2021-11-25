import { error } from 'src/models/error';
import {
    CommonScoreDistribution, 
    GetCountStatisticsResponse, 
    GetScoreStatisticsResponse, 
    SpecialScoreDistribution 
} from '../../../../../api/apiTypes';

export interface IStatisticsState {
  getStatisticsStatus: 0 | 200 | 400 | 401;
  statistics: statisticsType;
  error: error;
}

export interface statisticsType {
  count:GetCountStatisticsResponse,
  score:GetScoreStatisticsResponse
}