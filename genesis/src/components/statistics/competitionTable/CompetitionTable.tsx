import React, { Component, FC, useEffect } from "react";
import * as S from "../style";
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
  totalApplicantCount: number; */
  score: GetScoreStatisticsResponse;
}

const CompetitionTable: FC<Props> = ({ score }) => {

  const CommonScoreList = ({ type, score1, score2 }) => {
    return (
      <tr>
        <td className="common_score-left">{type}</td>
        <td>{score1}</td>
        <td>{score2}</td>
      </tr>
    );
  };
  const MeisterScoreList = ({ type, score1, score2, score3, score4 }) => {
    return (
      <tr>
        <td className="meister_score-left">{type}</td>
        <td>{score1}</td>
        <td>{score2}</td>
        <td>{score3}</td>
        <td>{score4}</td>
      </tr>
    );
  };
  return (
    <S.CompetitionTableWrapper>
      <table className="common_score-table">
        <tbody>
          <tr className="table-edge"></tr>

          <th rowSpan={2}></th>

          <th
            style={{ fontSize: "15px", lineHeight: "20px", fontWeight: "bold" }}
            colSpan={2}
            className="common_score-left"
          >
            일반 전형
          </th>
          <tr className="common_score-top">
            <td>대전</td>
            <td>전국</td>
          </tr>

          <CommonScoreList
            type="158~170"
            score1={score[0]["158-170"]}
            score2={score[1]["158-170"]}
          />
          <CommonScoreList
            type="145~157"
            score1={score[0]["145-157"]}
            score2={score[1]["145-157"]}
          />
          <CommonScoreList
            type="132~144"
            score1={score[0]["132-144"]}
            score2={score[1]["132-144"]}
          />
          <CommonScoreList
            type="119~131"
            score1={score[0]["119-131"]}
            score2={score[1]["119-131"]}
          />
          <CommonScoreList
            type="106~118"
            score1={score[0]["106-118"]}
            score2={score[1]["106-118"]}
          />
          <CommonScoreList
            type="93~105"
            score1={score[0]["93-105"]}
            score2={score[1]["93-105"]}
          />
          <CommonScoreList
            type="80~92"
            score1={score[0]["80-92"]}
            score2={score[1]["80-92"]}
          />
          <CommonScoreList
            type="79점 이하"
            score1={score[0]["-79"]}
            score2={score[1]["-79"]}
          />
          <tr className="table-edge"></tr>
        </tbody>
      </table>
      <table className="meister_score-table">
        <tbody>
          <tr className="table-edge"></tr>
          <th className="meister_score-left" rowSpan={2}></th>
          <th colSpan={2}>마이스터</th>
          <th colSpan={2}>사회통합</th>
          <tr className="meister_score-top">
            <td>대전</td>
            <td>전국</td>
            <td>대전</td>
            <td>전국</td>
          </tr>
          <MeisterScoreList
            type="98~110"
            score1={score[2]["98-110"]}
            score2={score[3]["98-110"]}
            score3={score[4]["98-110"]}
            score4={score[5]["98-110"]}
          />
          <MeisterScoreList
            type="85~79"
            score1={score[2]["85-97"]}
            score2={score[3]["85-97"]}
            score3={score[4]["85-97"]}
            score4={score[5]["85-97"]}
          />
          <MeisterScoreList
            type="72~84"
            score1={score[2]["72-84"]}
            score2={score[3]["72-84"]}
            score3={score[4]["72-84"]}
            score4={score[5]["72-84"]}
          />
          <MeisterScoreList
            type="59~71"
            score1={score[2]["59-71"]}
            score2={score[3]["59-71"]}
            score3={score[4]["59-71"]}
            score4={score[5]["59-71"]}
          />
          <MeisterScoreList
            type="46~58"
            score1={score[2]["46-58"]}
            score2={score[3]["46-58"]}
            score3={score[4]["46-58"]}
            score4={score[5]["46-58"]}
          />
          <MeisterScoreList
            type="33~45"
            score1={score[2]["33-45"]}
            score2={score[3]["33-45"]}
            score3={score[4]["33-45"]}
            score4={score[5]["33-45"]}
          />
          <MeisterScoreList
            type="20~32"
            score1={score[2]["20-32"]}
            score2={score[3]["20-32"]}
            score3={score[4]["20-32"]}
            score4={score[5]["20-32"]}
          />
          <MeisterScoreList
            type="19점 이하"
            score1={score[2]["-19"]}
            score2={score[3]["-19"]}
            score3={score[4]["-19"]}
            score4={score[5]["-19"]}
          />
          <tr className="table-edge"></tr>
        </tbody>
      </table>
      {/* <S.TotalScore>총계: {1}명</S.TotalScore> */}
    </S.CompetitionTableWrapper>
  );
};

export default CompetitionTable;
