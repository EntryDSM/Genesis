import * as S from "../style";
import React, { useMemo } from "react";
import SelectDropdown from "./SelectDropdown";
import { ReturnDate } from "../../../utils/translateDate";
import { ScheduleType } from "../Schedule";

export type DateObjectType =
  | "year"
  | "month"
  | "day"
  | "hour"
  | "second"
  | "minute";

interface Props {
  isStart: boolean;
  date: ReturnDate;
  onChangeDate: (type: ScheduleType, date: ReturnDate) => void;
  scheduleType: ScheduleType;
}

const month = 12;
const hour = 24;
const minuteAndSecond = 60;

const ScheduleDateBody: React.FC<Props> = ({
  isStart,
  date,
  onChangeDate,
  scheduleType,
}) => {
  const onClickDropdownValue = (type: DateObjectType, value: string) => {
    const newDateObject = {
      ...date,
      [type]: value.length === 1 ? "0" + value : value,
    };
    onChangeDate(scheduleType, newDateObject);
  };
  const itemCount = useMemo(() => {
    let num = 0;
    switch (Number(date.month)) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        num = 31;
        break;
      case 2:
        num = Number(date.year) % 4 === 0 ? 29 : 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        num = 30;
        break;
      default:
        return;
    }
    return num;
  }, [date.month, date.year]);
  return (
    <S.ScheduleDateBody>
      <S.ScheduleDateTitle>{isStart ? "시작" : "마감"}일</S.ScheduleDateTitle>
      <S.ScheduleDateSelectBox>
        <SelectDropdown
          selectedValue={date.month}
          onClickDropdownValue={onClickDropdownValue}
          itemCount={month}
          type="month"
        />
        <S.ScheduleSelectDivision>월</S.ScheduleSelectDivision>
        <SelectDropdown
          selectedValue={date.day}
          onClickDropdownValue={onClickDropdownValue}
          itemCount={itemCount}
          type="day"
        />
        <S.ScheduleSelectDivision>일</S.ScheduleSelectDivision>
      </S.ScheduleDateSelectBox>
      <S.ScheduleTimeSelectBox>
        <SelectDropdown
          selectedValue={date.hour}
          onClickDropdownValue={onClickDropdownValue}
          itemCount={hour}
          type="hour"
        />
        <q />
        <SelectDropdown
          selectedValue={date.minute}
          onClickDropdownValue={onClickDropdownValue}
          itemCount={minuteAndSecond}
          type="minute"
        />
        <q />
        <SelectDropdown
          selectedValue={date.second}
          onClickDropdownValue={onClickDropdownValue}
          itemCount={minuteAndSecond}
          type="second"
        />
      </S.ScheduleTimeSelectBox>
    </S.ScheduleDateBody>
  );
};
export default ScheduleDateBody;
