import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  setProcess,
  setIsEnd,
  setIsStart,
  setStatus,
  getStatus,
  setStartScheduleMonth,
  setStartScheduleDay,
  setStartScheduleHour,
  setStartScheduleMinute,
  setStartScheduleSecond,
  setEndScheduleMonth,
  setEndScheduleDay,
  setEndScheduleHour,
  setEndScheduleMinute,
  setEndScheduleSecond,
  setFirstScheduleMonth,
  setFirstScheduleDay,
  setFirstScheduleHour,
  setFirstScheduleMinute,
  setFirstScheduleSecond,
  setInterviewScheduleMonth,
  setInterviewScheduleDay,
  setInterviewScheduleHour,
  setInterviewScheduleMinute,
  setInterviewScheduleSecond,
  setSecondScheduleMonth,
  setSecondScheduleDay,
  setSecondScheduleHour,
  setSecondScheduleMinute,
  setSecondScheduleSecond,
  setStartDate,
  setEndDate,
  setFirstDate,
  setInterviewDate,
  setSecondDate,
  setSchedule,
} from 'src/data/modules/redux/action/schedule';
import { scheduleUpdateTypes, processType } from 'src/data/modules/redux/reducer/schedule/interface';
import { scheduleType } from 'src/data/modules/redux/reducer/schedule/scheduleConstance';

const useSchedule = () => {
  const dispatch = useDispatch();
  const state = useSelectState().schedule;
  const setState = {
    setStatus: (payload: scheduleType) => dispatch(setStatus(payload)),
    setIsStart: (payload: boolean) => dispatch(setIsStart(payload)),
    setIsEnd: (payload: boolean) => dispatch(setIsEnd(payload)),
    setProcess: (payload: processType[]) => dispatch(setProcess(payload)),
    getStatus: () => dispatch(getStatus()),
    setStartScheduleMonth: (payload: string) => {
      dispatch(setStartScheduleMonth(payload));
    },
    setStartScheduleDay: (payload: string) => {
      dispatch(setStartScheduleDay(payload));
    },
    setStartScheduleHour: (payload: string) => {
      dispatch(setStartScheduleHour(payload));
    },
    setStartScheduleMinute: (payload: string) => {
      dispatch(setStartScheduleMinute(payload));
    },
    setStartScheduleSecond: (payload: string) => {
      dispatch(setStartScheduleSecond(payload));
    },
    setEndScheduleMonth: (payload: string) => {
      dispatch(setEndScheduleMonth(payload));
    },
    setEndScheduleDay: (payload: string) => {
      dispatch(setEndScheduleDay(payload));
    },
    setEndScheduleHour: (payload: string) => {
      dispatch(setEndScheduleHour(payload));
    },
    setEndScheduleMinute: (payload: string) => {
      dispatch(setEndScheduleMinute(payload));
    },
    setEndScheduleSecond: (payload: string) => {
      dispatch(setEndScheduleSecond(payload));
    },
    setFirstScheduleMonth: (payload: string) => {
      dispatch(setFirstScheduleMonth(payload));
    },
    setFirstScheduleDay: (payload: string) => {
      dispatch(setFirstScheduleDay(payload));
    },
    setFirstScheduleHour: (payload: string) => {
      dispatch(setFirstScheduleHour(payload));
    },
    setFirstScheduleMinute: (payload: string) => {
      dispatch(setFirstScheduleMinute(payload));
    },
    setFirstScheduleSecond: (payload: string) => {
      dispatch(setFirstScheduleSecond(payload));
    },
    setInterviewScheduleMonth: (payload: string) => {
      dispatch(setInterviewScheduleMonth(payload));
    },
    setInterviewScheduleDay: (payload: string) => {
      dispatch(setInterviewScheduleDay(payload));
    },
    setInterviewScheduleHour: (payload: string) => {
      dispatch(setInterviewScheduleHour(payload));
    },
    setInterviewScheduleMinute: (payload: string) => {
      dispatch(setInterviewScheduleMinute(payload));
    },
    setInterviewScheduleSecond: (payload: string) => {
      dispatch(setInterviewScheduleSecond(payload));
    },
    setSecondScheduleMonth: (payload: string) => {
      dispatch(setSecondScheduleMonth(payload));
    },
    setSecondScheduleDay: (payload: string) => {
      dispatch(setSecondScheduleDay(payload));
    },
    setSecondScheduleHour: (payload: string) => {
      dispatch(setSecondScheduleHour(payload));
    },
    setSecondScheduleMinute: (payload: string) => {
      dispatch(setSecondScheduleMinute(payload));
    },
    setSecondScheduleSecond: (payload: string) => {
      dispatch(setSecondScheduleSecond(payload));
    },
    setStartDate: (payload: string) => {
      dispatch(setStartDate(payload))
    },
    setEndDate: (payload: string) => {
      dispatch(setEndDate(payload));
    },
    setFirstDate: (payload: string) => {
      dispatch(setFirstDate(payload))
    },
    setInterviewDate: (payload: string) => {
      dispatch(setInterviewDate(payload))
    },
    setSecondDate: (payload: string) => {
      dispatch(setSecondDate(payload))
    },
    setSchedule: (payload: { 
      schedules: Array<scheduleUpdateTypes>; 
    }) => {
      dispatch(setSchedule(payload))
    },
  };

  return {
    state,
    setState,
  };
};

export default useSchedule;
