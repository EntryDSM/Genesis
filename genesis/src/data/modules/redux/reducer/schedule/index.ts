import IScheduleState from "./interface";
import {
  IS_END,
  IS_START,
  PROCESS,
  STATUS,
  scheduleActionType,
} from "src/data/modules/redux/action/schedule";
import scheduleConstance, {
  NOT_APPLICATION_PERIOD,
  scheduleType,
} from "./scheduleConstance";
import {
  GET_STATUS_FAILURE,
  GET_STATUS_SUCCESS,
  START_SCHEDULE_MONTH,
  START_SCHEDULE_DAY,
  END_SCHEDULE_MONTH,
  END_SCHEDULE_DAY,
  FIRST_SCHEDULE_MONTH,
  FIRST_SCHEDULE_DAY,
  INTERVIEW_SCHEDULE_MONTH,
  INTERVIEW_SCHEDULE_DAY,
  SECOND_SCHEDULE_MONTH,
  SECOND_SCHEDULE_DAY,
  START_SCHEDULE_DATE,
  END_SCHEDULE_DATE,
  FIRST_SCHEDULE_DATE,
  INTERVIEW_SCHEDULE_DATE,
  SECOND_SCHEDULE_DATE,
  SET_SCHEDULE,
  SET_SCHEDULE_SUCCESS,
  SET_SCHEDULE_FAILURE,
  START_SCHEDULE_HOUR,
  START_SCHEDULE_MINUTE,
  START_SCHEDULE_SECOND,
  END_SCHEDULE_HOUR,
  END_SCHEDULE_MINUTE,
  END_SCHEDULE_SECOND,
  FIRST_SCHEDULE_HOUR,
  FIRST_SCHEDULE_MINUTE,
  FIRST_SCHEDULE_SECOND,
  INTERVIEW_SCHEDULE_HOUR,
  INTERVIEW_SCHEDULE_MINUTE,
  INTERVIEW_SCHEDULE_SECOND,
  SECOND_SCHEDULE_HOUR,
  SECOND_SCHEDULE_MINUTE,
  SECOND_SCHEDULE_SECOND,
} from "../../action/schedule/interface";

const InitialState: IScheduleState = {
  status: NOT_APPLICATION_PERIOD,
  isEnd: false,
  isStart: true,
  processes: scheduleConstance,
  startScheduleMonth: '05',
  startScheduleDay: '10',
  startScheduleHour: '12',
  startScheduleMinute: '00',
  startScheduleSecond: '00',
  endScheduleMonth: '05',
  endScheduleDay: '14',
  endScheduleHour: '12',
  endScheduleMinute: '00',
  endScheduleSecond: '00',
  firstScheduleMonth: '05',
  firstScheduleDay: '16',
  firstScheduleHour: '12',
  firstScheduleMinute: '00',
  firstScheduleSecond: '00',
  interviewScheduleMonth: '05',
  interviewScheduleDay: '18',
  interviewScheduleHour: '12',
  interviewScheduleMinute: '00',
  interviewScheduleSecond: '00',
  secondScheduleMonth: '05',
  secondScheduleDay: '21',
  secondScheduleHour: '12',
  secondScheduleMinute: '00',
  secondScheduleSecond: '00',
  scheduleDate: [
    {
      type: "START_DATE",
      date: "2022-05-05T12:05:55",
    },
    {
      type: "END_DATE",
      date: "2022-05-07T12:05:55",
    },
    {
      type: "FIRST_ANNOUNCEMENT",
      date: "2022-05-09T12:05:55",
    },
    {
      type: "INTERVIEW",
      date: "2022-05-10T12:05:55",
    },
    {
      type: "SECOND_ANNOUNCEMENT",
      date: "2022-05-11T12:05:55",
    },
  ],
  startScheduleDate: "",
  endScheduleDate: "",
  firstScheduleDate: "",
  interviewScheduleDate: "",
  secondScheduleDate: "",
  date: [
    {
      type: "END_DATE",
      date: "2022-10-10T12:05:55",
    },
    {
      type: "FIRST_ANNOUNCEMENT",
      date: "2022-10-22T12:05:55",
    },
    {
      type: "INTERVIEW",
      date: "2022-10-23T12:05:55",
    },
    {
      type: "SECOND_ANNOUNCEMENT",
      date: "2022-10-25T12:05:55",
    },
    {
      type: "START_DATE",
      date: "2022-10-04T12:05:55",
    },
    // {
    //   type: "NOT_APPLICATION_PERIOD",
    //   date: "2022-10-20",
    // },
  ],
  error: {
    status: 0,
    message: "",
    type: "",
  },
};

const scheduleReducer = (
  state: IScheduleState = InitialState,
  action: scheduleActionType
): IScheduleState => {
  switch (action.type) {
    case STATUS: {
      return { ...state, status: action.payload };
    }
    case IS_START: {
      return { ...state, isStart: action.payload };
    }
    case IS_END: {
      return { ...state, isEnd: action.payload };
    }
    case PROCESS: {
      return { ...state, processes: action.payload };
    }
    case GET_STATUS_SUCCESS: {

      return {
        ...state,
        date: action.payload.schedules,
        status: action.payload.current_status as scheduleType,
      };
    }
    case GET_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case START_SCHEDULE_MONTH: {
      return {
        ...state,
        startScheduleMonth: action.payload,
      };
    }
    case START_SCHEDULE_DAY: {
      return {
        ...state,
        startScheduleDay: action.payload,
      };
    }
    case START_SCHEDULE_HOUR: {
      return {
        ...state,
        startScheduleHour: action.payload,
      };
    }
    case START_SCHEDULE_MINUTE: {
      return {
        ...state,
        startScheduleMinute: action.payload,
      };
    }
    case START_SCHEDULE_SECOND: {
      return {
        ...state,
        startScheduleSecond: action.payload,
      };
    }
    case END_SCHEDULE_MONTH: {
      return {
        ...state,
        endScheduleMonth: action.payload,
      };
    }
    case END_SCHEDULE_DAY: {
      return {
        ...state,
        endScheduleDay: action.payload,
      };
    }
    case END_SCHEDULE_HOUR: {
      return {
        ...state,
        endScheduleHour: action.payload,
      };
    }
    case END_SCHEDULE_MINUTE: {
      return {
        ...state,
        endScheduleMinute: action.payload,
      };
    }
    case END_SCHEDULE_SECOND: {
      return {
        ...state,
        endScheduleSecond: action.payload,
      };
    }
    case FIRST_SCHEDULE_MONTH: {
      return {
        ...state,
        firstScheduleMonth: action.payload,
      };
    }
    case FIRST_SCHEDULE_DAY: {
      return {
        ...state,
        firstScheduleDay: action.payload,
      };
    }
    case FIRST_SCHEDULE_HOUR: {
      return {
        ...state,
        firstScheduleHour: action.payload,
      };
    }
    case FIRST_SCHEDULE_MINUTE: {
      return {
        ...state,
        firstScheduleMinute: action.payload,
      };
    }
    case FIRST_SCHEDULE_SECOND: {
      return {
        ...state,
        firstScheduleSecond: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_MONTH: {
      return {
        ...state,
        interviewScheduleMonth: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_DAY: {
      return {
        ...state,
        interviewScheduleDay: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_HOUR: {
      return {
        ...state,
        interviewScheduleHour: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_MINUTE: {
      return {
        ...state,
        interviewScheduleMinute: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_SECOND: {
      return {
        ...state,
        interviewScheduleSecond: action.payload,
      };
    }
    case SECOND_SCHEDULE_MONTH: {
      return {
        ...state,
        secondScheduleMonth: action.payload,
      };
    }
    case SECOND_SCHEDULE_DAY: {
      return {
        ...state,
        secondScheduleDay: action.payload,
      };
    }
    case SECOND_SCHEDULE_HOUR: {
      return {
        ...state,
        secondScheduleHour: action.payload,
      };
    }
    case SECOND_SCHEDULE_MINUTE: {
      return {
        ...state,
        secondScheduleMinute: action.payload,
      };
    }
    case SECOND_SCHEDULE_SECOND: {
      return {
        ...state,
        secondScheduleSecond: action.payload,
      };
    }
    case START_SCHEDULE_DATE: {
      return {
        ...state,
        startScheduleDate: action.payload,
      };
    }
    case END_SCHEDULE_DATE: {
      return {
        ...state,
        endScheduleDate: action.payload,
      };
    }
    case FIRST_SCHEDULE_DATE: {
      return {
        ...state,
        firstScheduleDate: action.payload,
      };
    }
    case INTERVIEW_SCHEDULE_DATE: {
      return {
        ...state,
        interviewScheduleDate: action.payload,
      };
    }
    case SECOND_SCHEDULE_DATE: {
      return {
        ...state,
        secondScheduleDate: action.payload,
      };
    }
    case SET_SCHEDULE: {
      return {
        ...state,
        scheduleDate: action.payload.schedules,
      };
    }
    case SET_SCHEDULE_SUCCESS: {
      return {
        ...state,
      };
    }
    case SET_SCHEDULE_FAILURE: {
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

export default scheduleReducer;
