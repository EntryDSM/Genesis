import React, { FC, useEffect } from "react";
import * as S from "./style";
import CompetitionTable from "./competitionTable";
import CompetitionView from "./competitionView";
import CompetitionTotalGraph from "./competitionTotalGraph";
import {
  CommonScoreDistribution,
  GetCountStatisticsResponse,
  GetScoreStatisticsResponse,
  SpecialScoreDistribution,
} from "src/data/api/apiTypes";
import { decimalLimit } from "src/utils/checkType";

interface Props {
  score: GetScoreStatisticsResponse;
  count: GetCountStatisticsResponse;
}

const Statistics: FC<Props> = ({ score, count }) => {
  const getTotalCount = () => {
    let result = 0;
    for(let i =0;i<6;i++){
      result += count[i].count;
    }
    return result;
  }

  const totalCompetition = (getTotalCount()/72).toFixed(1);
  return (
    <S.StatisticsPageContainer>
      <S.StatisticsContainer>
        <S.StatisticsBox>
          <S.StatisticsTitle>입학원서 접수 현황</S.StatisticsTitle>
          <S.StatisticsSubTitle>Entry DSM 2021 Admin page</S.StatisticsSubTitle>
          <S.StatisticsSubjectWrapper>
            <S.EachStatisticsSubjectWrapper>
              <S.StatisticsSubjectTitle>총 지원자 수 :</S.StatisticsSubjectTitle>
              <S.StatisticsSubjectCount>{getTotalCount()} <span>명</span></S.StatisticsSubjectCount>
            </S.EachStatisticsSubjectWrapper>
            <S.EachStatisticsSubjectWrapper>
              <S.StatisticsSubjectTitle>경쟁률 :</S.StatisticsSubjectTitle>
              <S.StatisticsSubjectCount>{getTotalCount()?decimalLimit(totalCompetition):0} : 1</S.StatisticsSubjectCount>

            </S.EachStatisticsSubjectWrapper>
          </S.StatisticsSubjectWrapper>
          <S.CompetitionTableTitle>
            2022년 신입생 지원률
          </S.CompetitionTableTitle>
          <CompetitionTotalGraph
          /* commonScore={commonScore}
            meisterScore={meisterScore}
            socialScore={socialScore}
            totalApplicantCount={totalApplicantCount}
            totalCompetitionRate={totalCompetitionRate} */
            count={count}
          />
          <S.CompetitionTableTitle>
            2022년 신입생 환산점수
          </S.CompetitionTableTitle>
          <CompetitionTable
            /* commonScore={commonScore}
            meisterScore={meisterScore}
            socialScore={socialScore}
            totalApplicantCount={totalApplicantCount} */
            score={score}
          />
          <S.CompetitionTableTitle>
            2022년 신입생 경쟁률
          </S.CompetitionTableTitle>
          <CompetitionView
            /* totalApplicantCount={totalApplicantCount}
          totalCompetitionRate={totalCompetitionRate}
          total_submitted_applicant_count={total_submitted_applicant_count} */
            count={count}
          />
        </S.StatisticsBox>
      </S.StatisticsContainer>
    </S.StatisticsPageContainer>
  );
};

export default Statistics;
