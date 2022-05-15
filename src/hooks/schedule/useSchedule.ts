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
    setStartScheduleMonth: (payload: number) => {
      dispatch(setStartScheduleMonth(payload));
    },
    setStartScheduleDay: (payload: number) => {
      dispatch(setStartScheduleDay(payload));
    },
    setStartScheduleHour: (payload: number) => {
      dispatch(setStartScheduleHour(payload));
    },
    setStartScheduleMinute: (payload: number) => {
      dispatch(setStartScheduleMinute(payload));
    },
    setStartScheduleSecond: (payload: number) => {
      dispatch(setStartScheduleSecond(payload));
    },
    setEndScheduleMonth: (payload: number) => {
      dispatch(setEndScheduleMonth(payload));
    },
    setEndScheduleDay: (payload: number) => {
      dispatch(setEndScheduleDay(payload));
    },
    setEndScheduleHour: (payload: number) => {
      dispatch(setEndScheduleHour(payload));
    },
    setEndScheduleMinute: (payload: number) => {
      dispatch(setEndScheduleMinute(payload));
    },
    setEndScheduleSecond: (payload: number) => {
      dispatch(setEndScheduleSecond(payload));
    },
    setFirstScheduleMonth: (payload: number) => {
      dispatch(setFirstScheduleMonth(payload));
    },
    setFirstScheduleDay: (payload: number) => {
      dispatch(setFirstScheduleDay(payload));
    },
    setFirstScheduleHour: (payload: number) => {
      dispatch(setFirstScheduleHour(payload));
    },
    setFirstScheduleMinute: (payload: number) => {
      dispatch(setFirstScheduleMinute(payload));
    },
    setFirstScheduleSecond: (payload: number) => {
      dispatch(setFirstScheduleSecond(payload));
    },
    setInterviewScheduleMonth: (payload: number) => {
      dispatch(setInterviewScheduleMonth(payload));
    },
    setInterviewScheduleDay: (payload: number) => {
      dispatch(setInterviewScheduleDay(payload));
    },
    setInterviewScheduleHour: (payload: number) => {
      dispatch(setInterviewScheduleHour(payload));
    },
    setInterviewScheduleMinute: (payload: number) => {
      dispatch(setInterviewScheduleMinute(payload));
    },
    setInterviewScheduleSecond: (payload: number) => {
      dispatch(setInterviewScheduleSecond(payload));
    },
    setSecondScheduleMonth: (payload: number) => {
      dispatch(setSecondScheduleMonth(payload));
    },
    setSecondScheduleDay: (payload: number) => {
      dispatch(setSecondScheduleDay(payload));
    },
    setSecondScheduleHour: (payload: number) => {
      dispatch(setSecondScheduleHour(payload));
    },
    setSecondScheduleMinute: (payload: number) => {
      dispatch(setSecondScheduleMinute(payload));
    },
    setSecondScheduleSecond: (payload: number) => {
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
