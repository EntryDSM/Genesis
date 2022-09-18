import React, { FC, useEffect, useMemo, useState } from "react";
import * as S from "./style";
import {
  application_icon,
  interview_icon,
  presentation_regiester_icon,
  presentation_icon,
} from "src/assets/schedule";
import { Button } from "../common";
import { processTimeType } from "src/data/modules/redux/reducer/schedule/interface";
import ScheduleContent from "./content";
import { ReturnDate, translateDate } from "../../utils/translateDate";
import { updateScheduleApi } from "../../data/api/schedule/scheduleApi";
import { dateObjectToString } from "../../utils/dateObjectToString";

export type ScheduleType =
  | "END_DATE"
  | "FIRST_ANNOUNCEMENT"
  | "INTERVIEW"
  | "SECOND_ANNOUNCEMENT"
  | "START_DATE";

interface ScheduleArrayProps {
  summary: string;
  image: string;
  alt: string;
  name: ScheduleType;
  startOnly: boolean;
}

interface Props {
  date: processTimeType[];
}

const Schedule: FC<Props> = ({ date }) => {
  const scheduleArray: ScheduleArrayProps[] = useMemo(
    () => [
      {
        summary: "원서 접수",
        image: application_icon,
        alt: "원서 접수",
        name: "START_DATE",
        startOnly: false,
      },
      {
        summary: "1차 발표",
        image: presentation_icon,
        alt: "1차 발표",
        name: "FIRST_ANNOUNCEMENT",
        startOnly: true,
      },
      {
        summary: "면접",
        image: interview_icon,
        alt: "인터뷰",
        name: "INTERVIEW",
        startOnly: true,
      },
      {
        summary: "발표 및 접수",
        image: presentation_regiester_icon,
        alt: "발표 및 접수",
        name: "SECOND_ANNOUNCEMENT",
        startOnly: true,
      },
    ],
    [date]
  );
  const [schedule, setSchedule] = useState({
    START_DATE: translateDate(date[0].date),
    END_DATE: translateDate(date[1].date),
    FIRST_ANNOUNCEMENT: translateDate(date[2].date),
    INTERVIEW: translateDate(date[3].date),
    SECOND_ANNOUNCEMENT: translateDate(date[4].date),
  });
  useEffect(() => {
    setSchedule({
      START_DATE: translateDate(date[0].date),
      END_DATE: translateDate(date[1].date),
      FIRST_ANNOUNCEMENT: translateDate(date[2].date),
      INTERVIEW: translateDate(date[3].date),
      SECOND_ANNOUNCEMENT: translateDate(date[4].date),
    });
  }, [date]);
  const onChangeDate = (type: ScheduleType, newDate: ReturnDate) => {
    setSchedule({
      ...schedule,
      [type]: newDate,
    });
  };
  const handleClickCheckBox = () => {
    if (window.confirm("일정을 수정하시겠습니까?")) {
      updateScheduleApi("", {
        schedules: [
          {
            type: "START_DATE",
            date: dateObjectToString(schedule.START_DATE),
          },
          {
            type: "END_DATE",
            date: dateObjectToString(schedule.END_DATE),
          },
          {
            type: "FIRST_ANNOUNCEMENT",
            date: dateObjectToString(schedule.FIRST_ANNOUNCEMENT),
          },
          {
            type: "INTERVIEW",
            date: dateObjectToString(schedule.INTERVIEW),
          },
          {
            type: "SECOND_ANNOUNCEMENT",
            date: dateObjectToString(schedule.SECOND_ANNOUNCEMENT),
          },
        ],
      }).then(() => alert("일정 수정 성공!"));
    }
  };
  return (
    <S.Schedule>
      <S.ScheduleWrapper>
        <S.ScheduleContentsBox>
          {scheduleArray.map((i) => {
            const newDate =
              i.name === "START_DATE"
                ? [schedule.START_DATE, schedule.END_DATE]
                : [schedule[i.name]];
            return (
              <ScheduleContent
                summary={i.summary}
                image={i.image}
                alt={i.alt}
                startOnly={i.startOnly}
                date={newDate}
                onChangeDate={onChangeDate}
                scheduleType={i.name}
              />
            );
          })}
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
