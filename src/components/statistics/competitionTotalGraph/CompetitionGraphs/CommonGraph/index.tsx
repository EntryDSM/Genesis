import React, { FC } from "react";
import * as S from "../../../style";
import {
  CommonScoreDistribution,
  GetCountStatisticsResponse,
  GetScoreStatisticsResponse,
} from "src/data/api/apiTypes";

interface Props {
  count: GetCountStatisticsResponse;
}

const CommonGraph: FC<Props> = ({ count }) => {
  const daejeonscore = count[0].count;
  const commonscore = count[1].count;

  const [isWidthOfGraphBar, setIsWidthOfGraphBar] = React.useState<number>();
  const [isAppearGraphOpa, setIsAppearGraphOpa] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsWidthOfGraphBar(commonscore + daejeonscore);
    setIsAppearGraphOpa(true);
  }, [count]);

  const graphBarContent = (isWidthOfGraphBar) => {
    if (isWidthOfGraphBar >= 0) {
      return <S.GraphBarContentText>{isWidthOfGraphBar}</S.GraphBarContentText>;
    }
  };

  return (
    <S.GraphWrapper>
      <S.GraphChart>
        {isAppearGraphOpa && (
          <S.CommonGraphBar isWidthOfCommonGraphBar={isWidthOfGraphBar}>
            {graphBarContent(isWidthOfGraphBar)}
          </S.CommonGraphBar>
        )}
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default CommonGraph;
