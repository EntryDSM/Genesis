import React, { FC } from "react";
import { GetCountStatisticsResponse } from "src/data/api/apiTypes";
import { decimalLimit } from "src/utils/checkType";
import * as S from "../style";

interface Props {
  count: GetCountStatisticsResponse;
}

const CompetitionView: FC<Props> = ({ count }) => {
  const daejeon = [count[0], count[2], count[4]];
  const common = [count[1], count[3], count[5]];

  const daejeonHalfCnt: number = 25;
  const meisterHalfCnt: number = 6;
  const socialHalfCnt: number = 1;

  return (
    <S.CompetitionViewWrapper className="no-select">
      <table className="competition-table">
        <tbody>
          <tr className="table-edge" />
          <th className="competition-table-top" colSpan={3}>
            <span>대전</span>
          </th>
          <th colSpan={3}>
            <span>전국</span>
          </th>
          <tr className="competition-table-mid">
            <td>일반 전형</td>
            <td>마이스터</td>
            <td>사회통합</td>
            <td>일반 전형</td>
            <td>마이스터</td>
            <td>사회통합</td>
          </tr>
          <tr className="competition-table-bottom">
            <td>
              {daejeon[0].count
                ? decimalLimit((daejeon[0].count / daejeonHalfCnt).toFixed(1))
                : 0}{" "}
              : 1
            </td>
            <td>
              {daejeon[1].count
                ? decimalLimit((daejeon[1].count / meisterHalfCnt).toFixed(1))
                : 0}{" "}
              : 1
            </td>
            <td>
              {daejeon[2].count
                ? decimalLimit((daejeon[2].count / socialHalfCnt).toFixed(1))
                : 0}{" "}
              : 1
            </td>
            <td>
              {common[0].count
                ? decimalLimit((common[0].count / daejeonHalfCnt).toFixed(1))
                : 0}{" "}
              : 1
            </td>
            <td>
              {common[1].count
                ? decimalLimit((common[1].count / meisterHalfCnt).toFixed(1))
                : 0}{" "}
              : 1
            </td>
            <td>
              {common[2].count
                ? decimalLimit((common[2].count / socialHalfCnt).toFixed(1))
                : 0}{" "}
              : 1
            </td>
          </tr>
          <tr className="table-edge" />
        </tbody>
      </table>
    </S.CompetitionViewWrapper>
  );
};

export default CompetitionView;
