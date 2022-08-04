import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "../../../../../assets/schedule";
import { processTimeType } from "../../../../../data/modules/redux/reducer/schedule/interface";
import { FIRST_ANNOUNCEMENT } from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { useSchedule } from "src/hooks/schedule";

interface Props {
  date: Array<processTimeType>;
  setFirstScheduleDay: (payload: string) => void;
}

const MonthSelect: FC<Props> = ({ date, setFirstScheduleDay }) => {
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
    day < 10 ? setFirstScheduleDay(0 + day) : setFirstScheduleDay(day);
    localStorage.setItem("firstScheduleDay", JSON.stringify(day));
  };

  const getLocalStorage = JSON.parse(
    localStorage.getItem("firstScheduleDay") ||
      JSON.stringify(
        !date
          .filter((date) => date.type === FIRST_ANNOUNCEMENT)[0]
          .date.slice(8, 10)
      )
  );

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  React.useEffect(() => {
    localStorage.setItem(
      "firstScheduleDay",
      JSON.stringify(
        date
          .filter(
            (date) => date.type === FIRST_ANNOUNCEMENT && date.date.slice(8, 10)
          )[0]
          .date.slice(8, 10)
      )
    );
  }, []);

  return (
    <S.Select disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent>
        <p>{getLocalStorage}</p>
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
