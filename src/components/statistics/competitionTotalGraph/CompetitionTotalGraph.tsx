import React, { FC } from "react";
import * as S from "../style";
import { GraphRateItems } from "./CompetitionGraphs/GraphRateItems";
import { CommonGraph, MeisterGraph, SocialGraph } from "./CompetitionGraphs";
import {
  CommonScoreDistribution,
  GetCountStatisticsResponse,
  GetScoreStatisticsResponse,
  SpecialScoreDistribution,
} from "src/data/api/apiTypes";

interface Props {
  /* commonScore: CommonScoreDistribution;
  meisterScore: SpecialScoreDistribution;
  socialScore: SpecialScoreDistribution;
  totalApplicantCount: number;
  totalCompetitionRate: number; */
  count:GetCountStatisticsResponse;
}

const CompetitionTotalGraph: FC<Props> = (
  {
    /* commonScore,
  meisterScore,
  socialScore,
  totalApplicantCount,
  totalCompetitionRate, */
  count
  }
) => {
  return (
    <S.CompetitionTotalGraphWrapper>
      <S.GraphRateBar>
        <S.EachGraphRateBarWrapper>
          <span>90</span>
          <div />
        </S.EachGraphRateBarWrapper>
        <S.EachGraphRateBarWrapper>
          <span>60</span>
          <div />
        </S.EachGraphRateBarWrapper>
        <S.EachGraphRateBarWrapper>
          <span>30</span>
          <div />
        </S.EachGraphRateBarWrapper>
        <S.EachGraphRateBarWrapper>
          <span>0</span>
          <div />
        </S.EachGraphRateBarWrapper>
      </S.GraphRateBar>
      <S.CompetitionGraphContainer>
        <div className="graph-wrapper">
          
          <CommonGraph count={count} />
        <MeisterGraph count={count} />
        <SocialGraph count={count} />
        </div>
        <div className="graph-region">
          <span>일반</span>
          <span>마이스터</span>
          <span>사회통합</span>
        </div>
      </S.CompetitionGraphContainer>
    </S.CompetitionTotalGraphWrapper>
  );
};

export default CompetitionTotalGraph;
