import { processTimeType, scheduleUpdateTypes } from '../../reducer/schedule/interface';
import { createAction } from 'typesafe-actions';
import { error } from "src/models/error";
import { scheduleType } from 'src/data/modules/redux/reducer/schedule/scheduleConstance';
import {
  IS_END,
  IS_START,
  STATUS,
  PROCESS,
  GET_STATUS_SUCCESS,
  GET_STATUS_FAILURE,
  GET_STATUS,
  START_SCHEDULE_MONTH,
  START_SCHEDULE_DAY,
  START_SCHEDULE_HOUR, 
  START_SCHEDULE_MINUTE, 
  START_SCHEDULE_SECOND,     
  END_SCHEDULE_MONTH,
  END_SCHEDULE_DAY,
  END_SCHEDULE_HOUR, 
  END_SCHEDULE_MINUTE,  
  END_SCHEDULE_SECOND,
  FIRST_SCHEDULE_MONTH,
  FIRST_SCHEDULE_DAY,
  FIRST_SCHEDULE_HOUR,  
  FIRST_SCHEDULE_MINUTE, 
  FIRST_SCHEDULE_SECOND, 
  INTERVIEW_SCHEDULE_MONTH,
  INTERVIEW_SCHEDULE_DAY,
  INTERVIEW_SCHEDULE_HOUR,   
  INTERVIEW_SCHEDULE_MINUTE, 
  INTERVIEW_SCHEDULE_SECOND,
  SECOND_SCHEDULE_MONTH,
  SECOND_SCHEDULE_DAY,
  SECOND_SCHEDULE_HOUR,   
  SECOND_SCHEDULE_MINUTE,  
  SECOND_SCHEDULE_SECOND,
  START_SCHEDULE_DATE,
  END_SCHEDULE_DATE,
  FIRST_SCHEDULE_DATE,
  INTERVIEW_SCHEDULE_DATE,
  SECOND_SCHEDULE_DATE,
  SET_SCHEDULE,
  SET_SCHEDULE_SUCCESS,
  SET_SCHEDULE_FAILURE,
} from './interface';

export const setStatus = createAction(STATUS)<scheduleType>();
export const setProcess = createAction(PROCESS)<Object>();
export const setIsStart = createAction(IS_START)<boolean>();
export const setIsEnd = createAction(IS_END)<boolean>();
export const getStatusSuccess = createAction(GET_STATUS_SUCCESS)<{
  schedules: processTimeType[]; current_status: string;
}>();
export const getStatusFailure = createAction(GET_STATUS_FAILURE)<error>();
export const getStatus = createAction(GET_STATUS)();
export const setStartScheduleMonth = createAction(START_SCHEDULE_MONTH)<number>();
export const setStartScheduleDay = createAction(START_SCHEDULE_DAY)<number>();
export const setStartScheduleHour = createAction(START_SCHEDULE_HOUR)<number>();
export const setStartScheduleMinute = createAction(START_SCHEDULE_MINUTE)<number>();
export const setStartScheduleSecond = createAction(START_SCHEDULE_SECOND)<number>();
export const setEndScheduleMonth = createAction(END_SCHEDULE_MONTH)<number>();
export const setEndScheduleDay = createAction(END_SCHEDULE_DAY)<number>();
export const setEndScheduleHour = createAction(END_SCHEDULE_HOUR)<number>();
export const setEndScheduleMinute = createAction(END_SCHEDULE_MINUTE)<number>();
export const setEndScheduleSecond = createAction(END_SCHEDULE_SECOND)<number>();
export const setFirstScheduleMonth = createAction(FIRST_SCHEDULE_MONTH)<number>();
export const setFirstScheduleDay = createAction(FIRST_SCHEDULE_DAY)<number>();
export const setFirstScheduleHour = createAction(FIRST_SCHEDULE_HOUR)<number>();
export const setFirstScheduleMinute = createAction(FIRST_SCHEDULE_MINUTE)<number>();
export const setFirstScheduleSecond = createAction(FIRST_SCHEDULE_SECOND)<number>();
export const setInterviewScheduleMonth = createAction(INTERVIEW_SCHEDULE_MONTH)<number>();
export const setInterviewScheduleDay = createAction(INTERVIEW_SCHEDULE_DAY)<number>();
export const setInterviewScheduleHour = createAction(INTERVIEW_SCHEDULE_HOUR)<number>();
export const setInterviewScheduleMinute = createAction(INTERVIEW_SCHEDULE_MINUTE)<number>();
export const setInterviewScheduleSecond = createAction(INTERVIEW_SCHEDULE_SECOND)<number>();
export const setSecondScheduleMonth = createAction(SECOND_SCHEDULE_MONTH)<number>();
export const setSecondScheduleDay = createAction(SECOND_SCHEDULE_DAY)<number>();
export const setSecondScheduleHour = createAction(SECOND_SCHEDULE_HOUR)<number>();
export const setSecondScheduleMinute = createAction(SECOND_SCHEDULE_MINUTE)<number>();
export const setSecondScheduleSecond = createAction(SECOND_SCHEDULE_SECOND)<number>();
export const setStartDate = createAction(START_SCHEDULE_DATE)<string>();
export const setEndDate = createAction(END_SCHEDULE_DATE)<string>();
export const setFirstDate = createAction(FIRST_SCHEDULE_DATE)<string>();
export const setInterviewDate = createAction(INTERVIEW_SCHEDULE_DATE)<string>();
export const setSecondDate = createAction(SECOND_SCHEDULE_DATE)<string>();
export const setSchedule = createAction(SET_SCHEDULE)<{
  schedules: Array<scheduleUpdateTypes>;
}>();
export const setScheduleSuccess = createAction(SET_SCHEDULE_SUCCESS)();
export const setScheduleFailure = createAction(SET_SCHEDULE_FAILURE)<error>();

export { IS_END, IS_START, STATUS, PROCESS };
export type scheduleActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>
  | ReturnType<typeof getStatus>
  | ReturnType<typeof setStartScheduleMonth>
  | ReturnType<typeof setStartScheduleDay>
  | ReturnType<typeof setStartScheduleHour>
  | ReturnType<typeof setStartScheduleMinute>
  | ReturnType<typeof setStartScheduleSecond>
  | ReturnType<typeof setEndScheduleMonth>
  | ReturnType<typeof setEndScheduleDay>
  | ReturnType<typeof setEndScheduleHour>
  | ReturnType<typeof setEndScheduleMinute>
  | ReturnType<typeof setEndScheduleSecond>
  | ReturnType<typeof setFirstScheduleMonth>
  | ReturnType<typeof setFirstScheduleDay>
  | ReturnType<typeof setFirstScheduleHour>
  | ReturnType<typeof setFirstScheduleMinute>
  | ReturnType<typeof setFirstScheduleSecond>
  | ReturnType<typeof setInterviewScheduleMonth>
  | ReturnType<typeof setInterviewScheduleDay>
  | ReturnType<typeof setInterviewScheduleHour>
  | ReturnType<typeof setInterviewScheduleMinute>
  | ReturnType<typeof setInterviewScheduleSecond>
  | ReturnType<typeof setSecondScheduleMonth>
  | ReturnType<typeof setSecondScheduleDay>
  | ReturnType<typeof setSecondScheduleHour>
  | ReturnType<typeof setSecondScheduleMinute>
  | ReturnType<typeof setSecondScheduleSecond>
  | ReturnType<typeof setStartDate>
  | ReturnType<typeof setEndDate>
  | ReturnType<typeof setFirstDate>
  | ReturnType<typeof setInterviewDate>
  | ReturnType<typeof setSecondDate>
  | ReturnType<typeof setSchedule>
  | ReturnType<typeof setScheduleSuccess>
  | ReturnType<typeof setScheduleFailure>;
