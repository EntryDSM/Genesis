import React, { FC } from "react";
import * as S from "../../../style";
import { CommonScoreDistribution, GetCountStatisticsResponse, GetScoreStatisticsResponse } from "src/data/api/apiTypes";

interface Props {
  count:GetCountStatisticsResponse;
}

const CommonGraph: FC<Props> = ({ count }) => {
  const daejeonscore = count[0].count
  const commonscore = count[1].count
  const [isWidthOfDaejeonGraphBar, setIsWidthOfDaejeonGraphBar] =
    React.useState<any>("");
    const [isWidthOfCommonGraphBar, setIsWidthOfCommonGraphBar] =
    React.useState<any>("");
  const [isAppearGraphOpa, setIsAppearGraphOpa] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsWidthOfCommonGraphBar(commonscore/* commonScore.common_count */);
    setIsWidthOfDaejeonGraphBar(daejeonscore);
    setIsAppearGraphOpa(true);
  }, [count]);

  const graphBarContent = (count, isWidthOfGraphBar) => {
    if (isWidthOfGraphBar >= 0) {
      return (
        <S.GraphBarContentText isWidthOfGraphBar={isWidthOfGraphBar}>{count}{/* {isWidthOfCommonGraphBar} */}</S.GraphBarContentText>
      );
    }
  };

  return (
    <S.GraphWrapper>
      <S.GraphChart>
      {isAppearGraphOpa && (
          <S.CommonGraphBar isWidthOfCommonGraphBar={isWidthOfDaejeonGraphBar} is_daejeon={true}>  
            {graphBarContent(daejeonscore,isWidthOfDaejeonGraphBar)}
          </S.CommonGraphBar>
        )}
        {isAppearGraphOpa && (
          <S.CommonGraphBar isWidthOfCommonGraphBar={isWidthOfCommonGraphBar} is_daejeon={false}>  
            {graphBarContent(commonscore,isWidthOfCommonGraphBar)}
          </S.CommonGraphBar>
        )}
        {/* <S.GraphCompetitionRate>
          {commonScore.common_competition_rate}
        </S.GraphCompetitionRate> */}
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default CommonGraph;
