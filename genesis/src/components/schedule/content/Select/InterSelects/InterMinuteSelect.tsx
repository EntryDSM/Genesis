import React, { FC } from "react";
import * as S from "../../../style";
import { select_off, select_on } from "src/assets/schedule";
import { processTimeType } from "src/data/modules/redux/reducer/schedule/interface";
import { INTERVIEW } from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { useSchedule } from "src/hooks/schedule";

interface Props {
  date: Array<processTimeType>;
  setInterviewScheduleMinute: (payload: string) => void;
}

const MinuteSelect: FC<Props> = ({ date, setInterviewScheduleMinute }) => {
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

  const onSelectMinuteClick = (e) => {
    const minute = e.target.innerText;
    minute < 10
      ? setInterviewScheduleMinute(0 + minute)
      : setInterviewScheduleMinute(minute);
    localStorage.setItem("InterviewScheduleMinute", JSON.stringify(minute));
  };

  const getLocalStorage = JSON.parse(
    localStorage.getItem("InterviewScheduleMinute") ||
      JSON.stringify(
        !date.filter((date) => date.type === INTERVIEW)[0].date.slice(14, 16)
      )
  );

  const activeImg = React.useMemo(() => {
    if (active) return <img src={select_on} alt="select_on" />;
    else return <img src={select_off} alt="select_off" />;
  }, [active]);

  React.useEffect(() => {
    localStorage.setItem(
      "InterviewScheduleMinute",
      JSON.stringify(
        date
          .filter(
            (date) => date.type === INTERVIEW && date.date.slice(14, 16)
          )[0]
          .date.slice(14, 16)
      )
    );
  }, []);

  return (
    <S.MinuteSelect disabled={disabled} onClick={onSelectClick}>
      <S.MinuteSelectContent>
        <p>{getLocalStorage}</p>
        {activeImg}
      </S.MinuteSelectContent>
      {active && (
        <S.MinuteSubSelect>
          <S.GrayLine width={52} />
          {onestToSixtyst.map((minute) => {
            return <p onClick={onSelectMinuteClick}>{minute}</p>;
          })}
        </S.MinuteSubSelect>
      )}
    </S.MinuteSelect>
  );
};

export default MinuteSelect;
