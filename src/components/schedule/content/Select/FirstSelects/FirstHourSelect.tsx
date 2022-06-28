import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "src/assets/schedule";
import { processTimeType } from "src/data/modules/redux/reducer/schedule/interface";
import { FIRST_ANNOUNCEMENT } from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { useSchedule } from "src/hooks/schedule";

interface Props {
  date: Array<processTimeType>;
  setFirstScheduleHour: (payload: string) => void;
}

const HourSelect: FC<Props> = ({ date, setFirstScheduleHour }) => {
  const { setState } = useSchedule();

  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState("normal");
  const onestToTwelvest = [...Array(24)].map((_, i) => i + 1);

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

  const onSelectHourClick = (e) => {
    const hour = e.target.innerText;
    hour < 10 ? setFirstScheduleHour(0 + hour) : setFirstScheduleHour(hour);
    localStorage.setItem("FirstScheduleHour", JSON.stringify(hour));
  };

  const getLocalStorage = JSON.parse(
    localStorage.getItem("FirstScheduleHour") ||
      JSON.stringify(
        !date
          .filter((date) => date.type === FIRST_ANNOUNCEMENT)[0]
          .date.slice(11, 13)
      )
  );

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  React.useEffect(() => {
    localStorage.setItem(
      "FirstScheduleHour",
      JSON.stringify(
        date
          .filter(
            (date) =>
              date.type === FIRST_ANNOUNCEMENT && date.date.slice(11, 13)
          )[0]
          .date.slice(11, 13)
      )
    );
    setFirstScheduleHour(
      date
        .filter(
          (date) => date.type === FIRST_ANNOUNCEMENT && date.date.slice(11, 13)
        )[0]
        .date.slice(11, 13)
    );
  }, []);

  return (
    <S.HourSelect disabled={disabled} onClick={onSelectClick}>
      <S.HourSelectContent>
        <p>{getLocalStorage}</p>
        {activeImg}
      </S.HourSelectContent>
      {active && (
        <S.HourSubSelect>
          <S.GrayLine width={52} />
          {onestToTwelvest.map((hour) => {
            return <p onClick={onSelectHourClick}>{hour}</p>;
          })}
        </S.HourSubSelect>
      )}
    </S.HourSelect>
  );
};

export default HourSelect;
