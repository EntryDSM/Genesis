import { scheduleType } from '../scheduleConstance';
import { error } from "src/models/error";

export interface IScheduleState {
  status: scheduleType;
  isEnd: boolean;
  isStart: boolean;
  processes: Object;
  startScheduleMonth: string;
  startScheduleDay: string;
  startScheduleHour: string;
  startScheduleMinute: string;
  startScheduleSecond: string;
  endScheduleMonth: string;
  endScheduleDay: string;
  endScheduleHour: string;
  endScheduleMinute: string;
  endScheduleSecond: string;
  firstScheduleMonth: string;
  firstScheduleDay: string;
  firstScheduleHour: string;
  firstScheduleMinute: string;
  firstScheduleSecond: string;
  interviewScheduleMonth: string;
  interviewScheduleDay: string;
  interviewScheduleHour: string;
  interviewScheduleMinute: string;
  interviewScheduleSecond: string;
  secondScheduleMonth: string;
  secondScheduleDay: string;
  secondScheduleHour: string;
  secondScheduleMinute: string;
  secondScheduleSecond: string;
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
  type: "END_DATE" | "FIRST_ANNOUNCEMENT" | "INTERVIEW" | "SECOND_ANNOUNCEMENT" | "START_DATE";
  date: string;
}

export interface scheduleUpdateTypes {
  type: "END_DATE" | "FIRST_ANNOUNCEMENT" | "INTERVIEW" | "SECOND_ANNOUNCEMENT" | "START_DATE";
  date: string;
}

export interface processType {
  title: React.ReactNode;
  getDescription: (value?: string) => React.ReactNode;
  buttonText: string;
}


export default IScheduleState;
