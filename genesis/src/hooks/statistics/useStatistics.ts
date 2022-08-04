import { useDispatch } from 'react-redux';
import { useSelectState } from "../default";
import {
  getStatistics,
  getStatisticsSuccess,
} from '../../data/modules/redux/action/statistics';
import { 
  CommonScoreDistribution, 
  GetCountStatisticsResponse, 
  GetScoreStatisticsResponse, 
  SpecialScoreDistribution 
} from "../../data/api/apiTypes";

export const useStatistics = () => {
  const dispatch = useDispatch();
  const state = useSelectState().statistics;
  const setState = {
    getStatistics: () => dispatch(getStatistics()),
    setStatisticsSuccess: (payload: { 
      score:GetScoreStatisticsResponse,
      count:GetCountStatisticsResponse
    }) => dispatch(getStatisticsSuccess(payload)),
  };
  return {
    state,
    setState,
  };
};

export default useStatistics;
