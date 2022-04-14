import React, { FC } from "react";
import * as S from "../../../style";
import {
  GetCountStatisticsResponse,
  GetScoreStatisticsResponse,
  SpecialScoreDistribution,
} from "src/data/api/apiTypes";

interface Props {
  /*   meisterScore: SpecialScoreDistribution;
   */
  count: GetCountStatisticsResponse;
}

const MeisterGraph: FC<Props> = ({ count }) => {
  const daejeonscore = count[2].count;
  const commonscore = count[3].count;

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
          <S.MeisterGraphBar isWidthOfMeisterGraphBar={isWidthOfGraphBar}>
            {graphBarContent(isWidthOfGraphBar)}
          </S.MeisterGraphBar>
        )}
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default MeisterGraph;
