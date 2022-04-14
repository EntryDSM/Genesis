import React, { FC, useEffect } from "react";
import * as S from "../style";
import { CommonGraph, MeisterGraph, SocialGraph } from "./CompetitionGraphs";
import { GetCountStatisticsResponse } from "src/data/api/apiTypes";
import { decimalLimit } from "src/utils/checkType";

interface Props {
  count: GetCountStatisticsResponse;
}

const CompetitionTotalGraph: FC<Props> = ({ count }) => {
  return (
    <S.CompetitionTotalGraphWrapper>
      <S.CompetitionGraphContainer>
        <div className="graph-region">
          <p>일반</p>
          <p>마이스터</p>
          <p>사회통합</p>
        </div>
        <div className="graph-wrapper">
          <CommonGraph count={count} />
          <MeisterGraph count={count} />
          <SocialGraph count={count} />
        </div>
        <div className="graph-competition-rate">
          <div className="graph-rate-wrapper">
            <p>
              {count[0].count + count[1].count
                ? decimalLimit((count[0].count / 40).toFixed(1))
                : 0}
            </p>
            <p className="rate-end">: 1</p>
          </div>
          <div className="graph-rate-wrapper">
            <p>
              {count[2].count + count[3].count
                ? decimalLimit((count[0].count / 18).toFixed(1))
                : 0}
            </p>
            <p className="rate-end">: 1</p>
          </div>
          <div className="graph-rate-wrapper">
            <p>
              {count[4].count + count[5].count
                ? decimalLimit((count[0].count / 2).toFixed(1))
                : 0}
            </p>
            <p className="rate-end">: 1</p>
          </div>
        </div>
      </S.CompetitionGraphContainer>
      <S.GraphRateBar>
        <p>0</p>
        <p>10</p>
        <p>20</p>
        <p>30</p>
        <p>40</p>
        <p>50</p>
        <p>60</p>
        <p>70</p>
        <p>80</p>
        <p>90</p>
        <p id="endofnum"></p>
      </S.GraphRateBar>
    </S.CompetitionTotalGraphWrapper>
  );
};

export default CompetitionTotalGraph;
