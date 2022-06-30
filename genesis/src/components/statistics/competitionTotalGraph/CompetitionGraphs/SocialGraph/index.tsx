import React, { FC } from "react";
import * as S from "../../../style";
import {
  GetCountStatisticsResponse,
  GetScoreStatisticsResponse,
  SpecialScoreDistribution,
} from "src/data/api/apiTypes";

interface Props {
  count: GetCountStatisticsResponse;
}

const SocialGraph: FC<Props> = ({ count }) => {
  const daejeonscore = count[4].count;
  const commonscore = count[5].count;

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
          <S.SocialGraphBar isWidthOfSocialGraphBar={isWidthOfGraphBar}>
            {graphBarContent(isWidthOfGraphBar)}
          </S.SocialGraphBar>
        )}
      </S.GraphChart>
    </S.GraphWrapper>
  );
};

export default SocialGraph;
