import { scheduleType } from '../scheduleConstance';
import { error } from "src/models/error";

export interface IScheduleState {
  status: scheduleType;
  isEnd: boolean;
  isStart: boolean;
  processes: Object;
  startScheduleMonth: number;
  startScheduleDay: number;
  startScheduleHour: number;
  startScheduleMinute: number;
  startScheduleSecond: number;
  endScheduleMonth: number;
  endScheduleDay: number;
  endScheduleHour: number;
  endScheduleMinute: number;
  endScheduleSecond: number;
  firstScheduleMonth: number;
  firstScheduleDay: number;
  firstScheduleHour: number;
  firstScheduleMinute: number;
  firstScheduleSecond: number;
  interviewScheduleMonth: number;
  interviewScheduleDay: number;
  interviewScheduleHour: number;
  interviewScheduleMinute: number;
  interviewScheduleSecond: number;
  secondScheduleMonth: number;
  secondScheduleDay: number;
  secondScheduleHour: number;
  secondScheduleMinute: number;
  secondScheduleSecond: number;
  startScheduleDate: string;
  endScheduleDate: string;
  firstScheduleDate: string;
  interviewScheduleDate: string;
  secondScheduleDate: string;
  scheduleDate: Array<scheduleUpdateTypes>;
  date: processTimeType[];
  error: error;
}

export interface processTimeType {
  type: string;
  date: string;
}

export interface scheduleUpdateTypes {
  type: string;
  date: string;
}

export interface processType {
  title: React.ReactNode;
  getDescription: (value?: string) => React.ReactNode;
  buttonText: string;
}


export default IScheduleState;
