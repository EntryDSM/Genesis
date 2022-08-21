import React, { FC } from "react";
import * as S from "../style";
import ScheduleModifySelectIcon from "../../../assets/schedule/schedule_modify_select_off";
import ScheduleDateBody from "./ScheduleDateBody";
import { ReturnDate } from "../../../utils/translateDate";
import { ScheduleType } from "../Schedule";
import scheduleDateBody from "./ScheduleDateBody";

interface Props {
  summary: string;
  image: string;
  alt: string;
  startOnly: boolean;
  date: ReturnDate[];
  onChangeDate: (type: ScheduleType, date: ReturnDate) => void;
  scheduleType: ScheduleType;
}

const ScheduleContent: FC<Props> = ({
  summary,
  image,
  alt,
  startOnly,
  date,
  onChangeDate,
  scheduleType,
}) => {
  return (
    <S.ScheduleContent>
      <S.ScheduleContentBox>
        <S.ScheduleTitle>{summary}</S.ScheduleTitle>
        <S.ScheduleImg>
          <img src={image} alt={alt} />
        </S.ScheduleImg>
        <S.ScheduleDate>
          <ScheduleDateBody
            isStart={true}
            date={date[0]}
            onChangeDate={onChangeDate}
            scheduleType={scheduleType}
          />
          {!startOnly && (
            <ScheduleDateBody
              isStart={false}
              date={date[1]}
              onChangeDate={onChangeDate}
              scheduleType={"END_DATE"}
            />
          )}
        </S.ScheduleDate>
      </S.ScheduleContentBox>
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
