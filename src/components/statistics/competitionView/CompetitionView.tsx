import React, { FC } from "react";
import * as S from "../style";

interface Props {
  totalApplicantCount: number;
  totalCompetitionRate: number;
  total_submitted_applicant_count: number;
}

const CompetitionView: FC<Props> = ({
  totalApplicantCount,
  totalCompetitionRate,
  total_submitted_applicant_count,
}) => {
  
  return (
    <S.CompetitionViewWrapper className="no-select">
{/*       <S.CompetitionViewTitle>2021년 신입생</S.CompetitionViewTitle>
 */}      <table className="competition-table">
        <tbody>
          <tr className="competition-table-top">
            <td colSpan={3} >
              <span>대전</span>
              
            </td>
            <td colSpan={3} >
              <span>전국</span>
            </td>
          </tr>

          <tr />

          <tr className="competition-table-mid">
            <td>일반 전형</td>
            <td>마이스터</td>
            <td>사회통합</td>
            <td>일반 전형</td>
            <td>마이스터</td>
            <td>사회통합</td>
          </tr>

          <tr />
          <tr className="competition-table-bottom">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr />
        </tbody>
      </table>
      {/* <S.TotalScore>총계: {totalApplicantCount}명</S.TotalScore> */}
    </S.CompetitionViewWrapper>
  );
};

export default CompetitionView;
