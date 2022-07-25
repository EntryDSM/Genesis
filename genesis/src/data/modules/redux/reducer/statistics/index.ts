import { IStatisticsState } from "./interface";
import { statisticsActionType } from "src/data/modules/redux/action/statistics";
import {
  GET_STATISTICS_SUCCESS,
  GET_STATISTICS_FAILURE,
} from "../../action/statistics/interface";

const initialState: IStatisticsState = {
  statistics: {
    count: {
      0: {
        application_type: "COMMON",
        count: 0,
        daejeon: true,
      },
      1: {
        application_type: "COMMON",
        count: 0,
        daejeon: false,
      },
      2: {
        application_type: "MEISTER",
        count: 0,
        daejeon: true,
      },
      3: {
        application_type: "MEISTER",
        count: 0,
        daejeon: false,
      },
      4: {
        application_type: "SOCIAL",
        count: 0,
        daejeon: true,
      },
      5: {
        application_type: "SOCIAL",
        count: 0,
        daejeon: false,
      },
    },
    score: {
      0: {
        "158-170": 0,
        "145-157": 0,
        "132-144": 0,
        "119-131": 0,
        "106-118": 0,
        "93-105": 0,
        "80-92": 0,
        "-79": 0,
        application_type: "COMMON",
        daejeon: true,
      },
      1: {
        "158-170": 0,
        "145-157": 0,
        "132-144": 0,
        "119-131": 0,
        "106-118": 0,
        "93-105": 0,
        "80-92": 0,
        "-79": 0,
        application_type: "COMMON",
        daejeon: false,
      },
      2: {
        "98-110": 0,
        "85-97": 0,
        "72-84": 0,
        "59-71": 0,
        "46-58": 0,
        "33-45": 0,
        "20-32": 0,
        "-19": 0,
        application_type: "MEISTER",
        daejeon: true,
      },
      3: {
        "98-110": 0,
        "85-97": 0,
        "72-84": 0,
        "59-71": 0,
        "46-58": 0,
        "33-45": 0,
        "20-32": 0,
        "-19": 0,
        application_type: "MEISTER",
        daejeon: false,
      },
      4: {
        "98-110": 0,
        "85-97": 0,
        "72-84": 0,
        "59-71": 0,
        "46-58": 0,
        "33-45": 0,
        "20-32": 0,
        "-19": 0,
        application_type: "SOCIAL",
        daejeon: true,
      },
      5: {
        "98-110": 0,
        "85-97": 0,
        "72-84": 0,
        "59-71": 0,
        "46-58": 0,
        "33-45": 0,
        "20-32": 0,
        "-19": 0,
        application_type: "SOCIAL",
        daejeon: false,
      },
    },
  },
  error: {
    status: 0,
    message: "",
    type: "",
  },
};

const statisticsReducer = (
  state: IStatisticsState = initialState,
  action: statisticsActionType
) => {
  switch (action.type) {
    case GET_STATISTICS_SUCCESS: {
      return {
        ...state,
        statistics: {
          score: action.payload.score,
          count: action.payload.count,
        },
      };
    }
    case GET_STATISTICS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default statisticsReducer;
