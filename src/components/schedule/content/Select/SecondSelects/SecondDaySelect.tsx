import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "src/assets/schedule";
import { processTimeType } from "src/data/modules/redux/reducer/schedule/interface";
import { SECOND_ANNOUNCEMENT } from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { useSchedule } from "src/hooks/schedule";

interface Props {
  date: Array<processTimeType>;
  setSecondScheduleDay: (payload: string) => void;
}

const MonthSelect: FC<Props> = ({ date, setSecondScheduleDay }) => {
  const { setState } = useSchedule();
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState("normal");
  const onestToThirtyOnest = [...Array(31)].map((_, i) => i + 1);

  React.useEffect(() => {
    setState.getStatus();
  }, []);

  const onSelectClick = () => {
    if (active === true) {
      setActive(false);
      setDisabled("normal");
    } else {
      setActive(true);
      setDisabled("enabled");
    }
  };

  const onSelectDayClick = (e) => {
    const day = e.target.innerText;
    day < 10 ? setSecondScheduleDay(0 + day) : setSecondScheduleDay(day);
    localStorage.setItem("secondScheduleDay", JSON.stringify(day));
  };

  const getLocalStorage = JSON.parse(
    localStorage.getItem("secondScheduleDay") ||
      JSON.stringify(
        !date
          .filter((date) => date.type === SECOND_ANNOUNCEMENT)[0]
          .date.slice(8, 10)
      )
  );

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  React.useEffect(() => {
    localStorage.setItem(
      "secondScheduleDay",
      JSON.stringify(
        date
          .filter(
            (date) =>
              date.type === SECOND_ANNOUNCEMENT && date.date.slice(8, 10)
          )[0]
          .date.slice(8, 10)
      )
    );
  }, []);

  return (
    <S.Select disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent>
        <p>
          {date
            .filter((date) => date.type === SECOND_ANNOUNCEMENT)[0]
            .date.slice(8, 10) && getLocalStorage}
        </p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {onestToThirtyOnest.map((day) => {
            return <p onClick={onSelectDayClick}>{day}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
