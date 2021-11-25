import React, { FC } from "react";
import * as S from "../../../style";
import { GetCountStatisticsResponse, GetScoreStatisticsResponse, SpecialScoreDistribution } from "src/data/api/apiTypes";

interface Props {
/*   meisterScore: SpecialScoreDistribution;
 */
count:GetCountStatisticsResponse;
}

const MeisterGraph: FC<Props> = ({ count }) => {
  const daejeonscore = count[2].count
  const commonscore = count[3].count
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
  }, []);

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
          <S.MeisterGraphBar isWidthOfMeisterGraphBar={isWidthOfDaejeonGraphBar} daejeon={true}>  
            {graphBarContent(daejeonscore,isWidthOfDaejeonGraphBar)}
          </S.MeisterGraphBar>
        )}
        {isAppearGraphOpa && (
          <S.MeisterGraphBar isWidthOfMeisterGraphBar={isWidthOfCommonGraphBar} daejeon={false}>  
            {graphBarContent(commonscore,isWidthOfCommonGraphBar)}
          </S.MeisterGraphBar>
        )}
        {/* <S.GraphCompetitionRate>
          {commonScore.common_competition_rate}
        </S.GraphCompetitionRate> */}
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default MeisterGraph;
