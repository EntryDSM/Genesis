import React, { FC } from "react";
import * as S from "../style";
import ProgressIcon from "./ProgressIcon";

interface Props {
  progressName: string;
  isPassed: boolean;
  isNow: boolean;
  leftDate: number;
}

const ProgressContent: FC<Props> = ({
  isNow,
  progressName,
  isPassed,
  leftDate,
}) => {
  return (
    <S.ProgressContent>
      <S.ProgressTextWrapper>
        <S.ProgressText isNow={isNow} isPassed={isPassed}>
          {progressName}
        </S.ProgressText>
        {isNow ? (
          <S.ProgressSubText>
            <span>
              {leftDate === 0 ? "마감일입니다." : `${leftDate}일 남았습니다.`}
            </span>
          </S.ProgressSubText>
        ) : (
          ""
        )}
      </S.ProgressTextWrapper>
      <ProgressIcon isPassed={isPassed} />
    </S.ProgressContent>
  );
};

export default ProgressContent;
