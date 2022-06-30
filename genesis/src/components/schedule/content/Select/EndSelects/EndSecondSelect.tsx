import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "src/assets/schedule";
import { processTimeType } from "src/data/modules/redux/reducer/schedule/interface";
import { END_DATE } from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { useSchedule } from "src/hooks/schedule";

interface Props {
  date: Array<processTimeType>;
  setEndScheduleSecond: (payload: string) => void;
}

const SecondSelect: FC<Props> = ({ date, setEndScheduleSecond }) => {
  const { setState } = useSchedule();

  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState("normal");
  const onestToSixtyst = [...Array(60)].map((_, i) => i + 1);

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

  const onSelectSecondClick = (e) => {
    const second = e.target.innerText;
    second < 10
      ? setEndScheduleSecond(0 + second)
      : setEndScheduleSecond(second);
    localStorage.setItem("EndScheduleSecond", JSON.stringify(second));
  };

  const getLocalStorage = JSON.parse(
    localStorage.getItem("EndScheduleSecond") ||
      JSON.stringify(
        !date.filter((date) => date.type === END_DATE)[0].date.slice(17, 19)
      )
  );

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  React.useEffect(() => {
    localStorage.setItem(
      "EndScheduleSecond",
      JSON.stringify(
        date
          .filter(
            (date) => date.type === END_DATE && date.date.slice(17, 19)
          )[0]
          .date.slice(17, 19)
      )
    );
  }, []);

  return (
    <S.SecondSelect disabled={disabled} onClick={onSelectClick}>
      <S.SecondSelectContent>
        <p>{getLocalStorage}</p>
        {activeImg}
      </S.SecondSelectContent>
      {active && (
        <S.SecondSubSelect>
          <S.GrayLine width={52} />
          {onestToSixtyst.map((second) => {
            return <p onClick={onSelectSecondClick}>{second}</p>;
          })}
        </S.SecondSubSelect>
      )}
    </S.SecondSelect>
  );
};

export default SecondSelect;
