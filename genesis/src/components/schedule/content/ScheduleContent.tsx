import React, { FC } from "react";
import * as S from "../style";
import {
  StartMonthSelect,
  StartDaySelect,
  StartHourSelect,
  StartMinuteSelect,
  StartSecondSelect,
} from "./Select/StartSelects";
import {
  EndMonthSelect,
  EndDaySelect,
  EndHourSelect,
  EndMinuteSelect,
  EndSecondSelect,
} from "./Select/EndSelects";
import {
  FirstMonthSelect,
  FirstDaySelect,
  FirstHourSelect,
  FirstMinuteSelect,
  FirstSecondSelect,
} from "./Select/FirstSelects";
import {
  InterMonthSelect,
  InterDaySelect,
  InterHourSelect,
  InterMinuteSelect,
  InterSecondSelect,
} from "./Select/InterSelects";
import {
  SecondMonthSelect,
  SecondDaySelect,
  SecondHourSelect,
  SecondMinuteSelect,
  SecondSecondSelect,
} from "./Select/SecondSelects";
import {
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  scheduleType,
  SECOND_ANNOUNCEMENT,
  START_DATE,
} from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { processTimeType } from "src/data/modules/redux/reducer/schedule/interface";
import { useSchedule } from "src/hooks/schedule";

interface Props {
  scheduleImg: string;
  scheduleImgAlt: string;
  scheduleName: string;
  nowStatus: scheduleType;
  startScheduleMonth: string;
  startScheduleDay: string;
  endScheduleMonth: string;
  endScheduleDay: string;
  firstScheduleMonth: string;
  firstScheduleDay: string;
  interviewScheduleMonth: string;
  interviewScheduleDay: string;
  secondScheduleMonth: string;
  secondScheduleDay: string;
  date: Array<processTimeType>;
  setStartScheduleMonth: (payload: string) => void;
  setStartScheduleDay: (payload: string) => void;
  setEndScheduleMonth: (payload: string) => void;
  setEndScheduleDay: (payload: string) => void;
  setFirstScheduleMonth: (payload: string) => void;
  setFirstScheduleDay: (payload: string) => void;
  setInterviewScheduleMonth: (payload: string) => void;
  setInterviewScheduleDay: (payload: string) => void;
  setSecondScheduleMonth: (payload: string) => void;
  setSecondScheduleDay: (payload: string) => void;
  setStartDate: (payload: string) => void;
  setEndDate: (payload: string) => void;
  setFirstDate: (payload: string) => void;
  setInterviewDate: (payload: string) => void;
  setSecondDate: (payload: string) => void;
  setStartScheduleHour: (payload: string) => void;
  setStartScheduleMinute: (payload: string) => void;
  setStartScheduleSecond: (payload: string) => void;
  setEndScheduleHour: (payload: string) => void;
  setEndScheduleMinute: (payload: string) => void;
  setEndScheduleSecond: (payload: string) => void;
  setFirstScheduleHour: (payload: string) => void;
  setFirstScheduleMinute: (payload: string) => void;
  setFirstScheduleSecond: (payload: string) => void;
  setInterviewScheduleHour: (payload: string) => void;
  setInterviewScheduleMinute: (payload: string) => void;
  setInterviewScheduleSecond: (payload: string) => void;
  setSecondScheduleHour: (payload: string) => void;
  setSecondScheduleMinute: (payload: string) => void;
  setSecondScheduleSecond: (payload: string) => void;
}

const ScheduleContent: FC<Props> = ({
  scheduleImg,
  scheduleImgAlt,
  scheduleName,
  nowStatus,
  startScheduleMonth,
  startScheduleDay,
  endScheduleMonth,
  endScheduleDay,
  firstScheduleMonth,
  firstScheduleDay,
  interviewScheduleMonth,
  interviewScheduleDay,
  secondScheduleMonth,
  secondScheduleDay,
  date,
  setStartScheduleMonth,
  setStartScheduleDay,
  setEndScheduleMonth,
  setEndScheduleDay,
  setFirstScheduleMonth,
  setFirstScheduleDay,
  setInterviewScheduleMonth,
  setInterviewScheduleDay,
  setSecondScheduleMonth,
  setSecondScheduleDay,
  setStartDate,
  setEndDate,
  setFirstDate,
  setInterviewDate,
  setSecondDate,
  setStartScheduleHour,
  setStartScheduleMinute,
  setStartScheduleSecond,
  setEndScheduleHour,
  setEndScheduleMinute,
  setEndScheduleSecond,
  setFirstScheduleHour,
  setFirstScheduleMinute,
  setFirstScheduleSecond,
  setInterviewScheduleHour,
  setInterviewScheduleMinute,
  setInterviewScheduleSecond,
  setSecondScheduleHour,
  setSecondScheduleMinute,
  setSecondScheduleSecond,
}) => {
  const { state } = useSchedule();

  React.useEffect(() => {
    setStartDate(
      "2022-" +
        startScheduleMonth +
        "-" +
        startScheduleDay +
        "T" +
        state.startScheduleHour +
        ":" +
        state.startScheduleMinute +
        ":" +
        state.startScheduleSecond
    );
    setEndDate(
      "2022-" +
        endScheduleMonth +
        "-" +
        endScheduleDay +
        "T" +
        state.endScheduleHour +
        ":" +
        state.endScheduleMinute +
        ":" +
        state.endScheduleSecond
    );
    setFirstDate(
      "2022-" +
        firstScheduleMonth +
        "-" +
        firstScheduleDay +
        "T" +
        state.firstScheduleHour +
        ":" +
        state.firstScheduleMinute +
        ":" +
        state.firstScheduleSecond
    );
    setInterviewDate(
      "2022-" +
        interviewScheduleMonth +
        "-" +
        interviewScheduleDay +
        "T" +
        state.interviewScheduleHour +
        ":" +
        state.interviewScheduleMinute +
        ":" +
        state.interviewScheduleSecond
    );
    setSecondDate(
      "2022-" +
        secondScheduleMonth +
        "-" +
        secondScheduleDay +
        "T" +
        state.secondScheduleHour +
        ":" +
        state.secondScheduleMinute +
        ":" +
        state.secondScheduleSecond
    );
  }, [
    startScheduleMonth,
    startScheduleDay,
    endScheduleMonth,
    endScheduleDay,
    firstScheduleMonth,
    firstScheduleDay,
    interviewScheduleMonth,
    interviewScheduleDay,
    secondScheduleMonth,
    secondScheduleDay,
    state.startScheduleHour,
    state.startScheduleMinute,
    state.startScheduleSecond,
    state.endScheduleHour,
    state.endScheduleMinute,
    state.endScheduleSecond,
    state.firstScheduleHour,
    state.firstScheduleMinute,
    state.firstScheduleSecond,
    state.interviewScheduleHour,
    state.interviewScheduleMinute,
    state.interviewScheduleSecond,
    state.secondScheduleHour,
    state.secondScheduleMinute,
    state.secondScheduleSecond,
  ]);

  const selectDateType = () => {
    if (nowStatus === START_DATE)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <StartMonthSelect
              date={date}
              setStartScheduleMonth={setStartScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <StartDaySelect
              date={date}
              setStartScheduleDay={setStartScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
          <S.ScheduleTimeSelectBox>
            <StartHourSelect
              date={date}
              setStartScheduleHour={setStartScheduleHour}
            />
            <q />
            <StartMinuteSelect
              date={date}
              setStartScheduleMinute={setStartScheduleMinute}
            />
            <q />
            <StartSecondSelect
              date={date}
              setStartScheduleSecond={setStartScheduleSecond}
            />
          </S.ScheduleTimeSelectBox>
          <S.ScheduleDateTitle>마감일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <EndMonthSelect
              date={date}
              setEndScheduleMonth={setEndScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <EndDaySelect date={date} setEndScheduleDay={setEndScheduleDay} />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
          <S.ScheduleTimeSelectBox>
            <EndHourSelect
              date={date}
              setEndScheduleHour={setEndScheduleHour}
            />
            <q />
            <EndMinuteSelect
              date={date}
              setEndScheduleMinute={setEndScheduleMinute}
            />
            <q />
            <EndSecondSelect
              date={date}
              setEndScheduleSecond={setEndScheduleSecond}
            />
          </S.ScheduleTimeSelectBox>
        </>
      );
    if (nowStatus === FIRST_ANNOUNCEMENT)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <FirstMonthSelect
              date={date}
              setFirstScheduleMonth={setFirstScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <FirstDaySelect
              date={date}
              setFirstScheduleDay={setFirstScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
          <S.ScheduleTimeSelectBox>
            <FirstHourSelect
              date={date}
              setFirstScheduleHour={setFirstScheduleHour}
            />
            <q />
            <FirstMinuteSelect
              date={date}
              setFirstScheduleMinute={setFirstScheduleMinute}
            />
            <q />
            <FirstSecondSelect
              date={date}
              setFirstScheduleSecond={setFirstScheduleSecond}
            />
          </S.ScheduleTimeSelectBox>
        </>
      );
    if (nowStatus === INTERVIEW)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <InterMonthSelect
              date={date}
              setInterviewScheduleMonth={setInterviewScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <InterDaySelect
              date={date}
              setInterviewScheduleDay={setInterviewScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
          <S.ScheduleTimeSelectBox>
            <InterHourSelect
              date={date}
              setInterviewScheduleHour={setInterviewScheduleHour}
            />
            <q />
            <InterMinuteSelect
              date={date}
              setInterviewScheduleMinute={setInterviewScheduleMinute}
            />
            <q />
            <InterSecondSelect
              date={date}
              setInterviewScheduleSecond={setInterviewScheduleSecond}
            />
          </S.ScheduleTimeSelectBox>
        </>
      );
    if (nowStatus === SECOND_ANNOUNCEMENT)
      return (
        <>
          <S.ScheduleDateTitle>시작일</S.ScheduleDateTitle>
          <S.ScheduleDateSelectBox>
            <SecondMonthSelect
              date={date}
              setSecondScheduleMonth={setSecondScheduleMonth}
            />
            <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
            <SecondDaySelect
              date={date}
              setSecondScheduleDay={setSecondScheduleDay}
            />
            <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
          </S.ScheduleDateSelectBox>
          <S.ScheduleTimeSelectBox>
            <SecondHourSelect
              date={date}
              setSecondScheduleHour={setSecondScheduleHour}
            />
            <q />
            <SecondMinuteSelect
              date={date}
              setSecondScheduleMinute={setSecondScheduleMinute}
            />
            <q />
            <SecondSecondSelect
              date={date}
              setSecondScheduleSecond={setSecondScheduleSecond}
            />
          </S.ScheduleTimeSelectBox>
        </>
      );
  };

  return (
    <S.ScheduleContent>
      <S.ScheduleContentBox>
        <S.ScheduleTitle>{scheduleName}</S.ScheduleTitle>
        <S.ScheduleImg>
          <img src={scheduleImg} alt={scheduleImgAlt} />
        </S.ScheduleImg>
        <S.ScheduleDate>
          <S.ScheduleDateBody>{selectDateType()}</S.ScheduleDateBody>
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
