import React, { FC } from "react";
import { GetCountStatisticsResponse } from "src/data/api/apiTypes";
import * as S from "../style";

interface Props {
  count:GetCountStatisticsResponse;
}

const CompetitionView: FC<Props> = ({
  count
}) => {

  const daejeon = [count[0],count[2],count[4]];
  const common = [count[1],count[3],count[5]];
  
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
            <td>{daejeon[0].count?(daejeon[0].count/20).toFixed(1) : 0} : 1</td>
            <td>{daejeon[1].count?(daejeon[1].count/9).toFixed(1) : 0} : 1</td>
            <td>{daejeon[2].count?(daejeon[2].count/1).toFixed(1) :0} : 1</td>
            <td>{common[0].count?(daejeon[0].count/20).toFixed(1):0} : 1</td>
            <td>{common[1].count?(daejeon[1].count/9).toFixed(1):0} : 1</td>
            <td>{common[2].count?(daejeon[2].count/1).toFixed(1):0} : 1</td>
          </tr>
          <tr />
        </tbody>
      </table>
      {/* <S.TotalScore>총계: {totalApplicantCount}명</S.TotalScore> */}
    </S.CompetitionViewWrapper>
  );
};

export default CompetitionView;
