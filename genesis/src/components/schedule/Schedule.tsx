import React, { FC } from "react";
import * as S from "./style";
import {
  application_icon,
  interview_icon,
  presentation_regiester_icon,
  presentation_icon,
} from "src/assets/schedule";
import { Button } from "../common";
import {
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  SECOND_ANNOUNCEMENT,
  START_DATE,
} from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import {
  processTimeType,
  scheduleUpdateTypes,
} from "src/data/modules/redux/reducer/schedule/interface";
import ScheduleContent from "./content";

interface Props {
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
  startScheduleDate: string;
  endScheduleDate: string;
  firstScheduleDate: string;
  interviewScheduleDate: string;
  secondScheduleDate: string;
  date: Array<processTimeType>;
  setStartScheduleMonth: (payload: string) => void;
  setStartScheduleDay: (payload: string) => void;
  setStartScheduleHour: (payload: string) => void;
  setStartScheduleMinute: (payload: string) => void;
  setStartScheduleSecond: (payload: string) => void;
  setEndScheduleMonth: (payload: string) => void;
  setEndScheduleDay: (payload: string) => void;
  setEndScheduleHour: (payload: string) => void;
  setEndScheduleMinute: (payload: string) => void;
  setEndScheduleSecond: (payload: string) => void;
  setFirstScheduleMonth: (payload: string) => void;
  setFirstScheduleDay: (payload: string) => void;
  setFirstScheduleHour: (payload: string) => void;
  setFirstScheduleMinute: (payload: string) => void;
  setFirstScheduleSecond: (payload: string) => void;
  setInterviewScheduleMonth: (payload: string) => void;
  setInterviewScheduleDay: (payload: string) => void;
  setInterviewScheduleHour: (payload: string) => void;
  setInterviewScheduleMinute: (payload: string) => void;
  setInterviewScheduleSecond: (payload: string) => void;
  setSecondScheduleMonth: (payload: string) => void;
  setSecondScheduleDay: (payload: string) => void;
  setSecondScheduleHour: (payload: string) => void;
  setSecondScheduleMinute: (payload: string) => void;
  setSecondScheduleSecond: (payload: string) => void;
  setStartDate: (payload: string) => void;
  setEndDate: (payload: string) => void;
  setFirstDate: (payload: string) => void;
  setInterviewDate: (payload: string) => void;
  setSecondDate: (payload: string) => void;
  setSchedule: (payload: { schedules: Array<scheduleUpdateTypes> }) => void;
}

const Schedule: FC<Props> = ({
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
  startScheduleDate,
  endScheduleDate,
  firstScheduleDate,
  interviewScheduleDate,
  secondScheduleDate,
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
  setSchedule,
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
  const handleClickCheckBox = async (e) => {
    if (window.confirm("일정을 수정하시겠습니까?")) {
      setSchedule({
        schedules: [
          {
            type: "START_DATE",
            date: startScheduleDate,
          },
          {
            type: "END_DATE",
            date: endScheduleDate,
          },
          {
            type: "FIRST_ANNOUNCEMENT",
            date: firstScheduleDate,
          },
          {
            type: "INTERVIEW",
            date: interviewScheduleDate,
          },
          {
            type: "SECOND_ANNOUNCEMENT",
            date: secondScheduleDate,
          },
        ],
      });
    }
  };

  return (
    <S.Schedule>
      <S.ScheduleWrapper>
        <S.ScheduleContentsBox>
          <ScheduleContent
            scheduleImg={application_icon}
            scheduleImgAlt="application_icon"
            scheduleName="원서 접수"
            nowStatus={START_DATE}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            date={date}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
            setStartScheduleHour={setStartScheduleHour}
            setStartScheduleMinute={setStartScheduleMinute}
            setStartScheduleSecond={setStartScheduleSecond}
            setEndScheduleHour={setEndScheduleHour}
            setEndScheduleMinute={setEndScheduleMinute}
            setEndScheduleSecond={setEndScheduleSecond}
            setFirstScheduleHour={setFirstScheduleHour}
            setFirstScheduleMinute={setFirstScheduleMinute}
            setFirstScheduleSecond={setFirstScheduleSecond}
            setInterviewScheduleHour={setInterviewScheduleHour}
            setInterviewScheduleMinute={setInterviewScheduleMinute}
            setInterviewScheduleSecond={setInterviewScheduleSecond}
            setSecondScheduleHour={setSecondScheduleHour}
            setSecondScheduleMinute={setSecondScheduleMinute}
            setSecondScheduleSecond={setSecondScheduleSecond}
          />
          <ScheduleContent
            scheduleImg={presentation_icon}
            scheduleImgAlt="1-presentation_icon"
            scheduleName="1차 발표"
            nowStatus={FIRST_ANNOUNCEMENT}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            date={date}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
            setStartScheduleHour={setStartScheduleHour}
            setStartScheduleMinute={setStartScheduleMinute}
            setStartScheduleSecond={setStartScheduleSecond}
            setEndScheduleHour={setEndScheduleHour}
            setEndScheduleMinute={setEndScheduleMinute}
            setEndScheduleSecond={setEndScheduleSecond}
            setFirstScheduleHour={setFirstScheduleHour}
            setFirstScheduleMinute={setFirstScheduleMinute}
            setFirstScheduleSecond={setFirstScheduleSecond}
            setInterviewScheduleHour={setInterviewScheduleHour}
            setInterviewScheduleMinute={setInterviewScheduleMinute}
            setInterviewScheduleSecond={setInterviewScheduleSecond}
            setSecondScheduleHour={setSecondScheduleHour}
            setSecondScheduleMinute={setSecondScheduleMinute}
            setSecondScheduleSecond={setSecondScheduleSecond}
          />
          <ScheduleContent
            scheduleImg={interview_icon}
            scheduleImgAlt="interview_icon"
            scheduleName="면접"
            nowStatus={INTERVIEW}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            date={date}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
            setStartScheduleHour={setStartScheduleHour}
            setStartScheduleMinute={setStartScheduleMinute}
            setStartScheduleSecond={setStartScheduleSecond}
            setEndScheduleHour={setEndScheduleHour}
            setEndScheduleMinute={setEndScheduleMinute}
            setEndScheduleSecond={setEndScheduleSecond}
            setFirstScheduleHour={setFirstScheduleHour}
            setFirstScheduleMinute={setFirstScheduleMinute}
            setFirstScheduleSecond={setFirstScheduleSecond}
            setInterviewScheduleHour={setInterviewScheduleHour}
            setInterviewScheduleMinute={setInterviewScheduleMinute}
            setInterviewScheduleSecond={setInterviewScheduleSecond}
            setSecondScheduleHour={setSecondScheduleHour}
            setSecondScheduleMinute={setSecondScheduleMinute}
            setSecondScheduleSecond={setSecondScheduleSecond}
          />
          <ScheduleContent
            scheduleImg={presentation_regiester_icon}
            scheduleImgAlt="presentation_regiester_icon"
            scheduleName="발표 및 접수"
            nowStatus={SECOND_ANNOUNCEMENT}
            startScheduleMonth={startScheduleMonth}
            startScheduleDay={startScheduleDay}
            endScheduleMonth={endScheduleMonth}
            endScheduleDay={endScheduleDay}
            firstScheduleMonth={firstScheduleMonth}
            firstScheduleDay={firstScheduleDay}
            interviewScheduleMonth={interviewScheduleMonth}
            interviewScheduleDay={interviewScheduleDay}
            secondScheduleMonth={secondScheduleMonth}
            secondScheduleDay={secondScheduleDay}
            date={date}
            setStartScheduleMonth={setStartScheduleMonth}
            setStartScheduleDay={setStartScheduleDay}
            setEndScheduleMonth={setEndScheduleMonth}
            setEndScheduleDay={setEndScheduleDay}
            setFirstScheduleMonth={setFirstScheduleMonth}
            setFirstScheduleDay={setFirstScheduleDay}
            setInterviewScheduleMonth={setInterviewScheduleMonth}
            setInterviewScheduleDay={setInterviewScheduleDay}
            setSecondScheduleMonth={setSecondScheduleMonth}
            setSecondScheduleDay={setSecondScheduleDay}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setFirstDate={setFirstDate}
            setInterviewDate={setInterviewDate}
            setSecondDate={setSecondDate}
            setStartScheduleHour={setStartScheduleHour}
            setStartScheduleMinute={setStartScheduleMinute}
            setStartScheduleSecond={setStartScheduleSecond}
            setEndScheduleHour={setEndScheduleHour}
            setEndScheduleMinute={setEndScheduleMinute}
            setEndScheduleSecond={setEndScheduleSecond}
            setFirstScheduleHour={setFirstScheduleHour}
            setFirstScheduleMinute={setFirstScheduleMinute}
            setFirstScheduleSecond={setFirstScheduleSecond}
            setInterviewScheduleHour={setInterviewScheduleHour}
            setInterviewScheduleMinute={setInterviewScheduleMinute}
            setInterviewScheduleSecond={setInterviewScheduleSecond}
            setSecondScheduleHour={setSecondScheduleHour}
            setSecondScheduleMinute={setSecondScheduleMinute}
            setSecondScheduleSecond={setSecondScheduleSecond}
          />
        </S.ScheduleContentsBox>
        <S.ScheduleButtonBox>
          <Button className="schedule__fix-btn" onClick={handleClickCheckBox}>
            일정 수정
          </Button>
        </S.ScheduleButtonBox>
      </S.ScheduleWrapper>
    </S.Schedule>
  );
};

export default Schedule;
