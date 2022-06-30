import styled, { StyledComponent } from "styled-components";
import { color, pxToRem } from "../../styles";

export const StatisticsPageContainer = styled.div`
  width: 100%;
  min-height: 1800px;
  overflow-y: hidden;
  min-width: ${pxToRem(1320)}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.lightPrimaryColor};
  position: relative;
  padding-top: 60px;
`;

export const StatisticsContainer = styled.div`
  width: 70%;
  height: 1800px;
  padding-top: ${pxToRem(80)}rem;
  padding-bottom: ${pxToRem(80)}rem;
  background: ${color.backgorund};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
`;

export const StatisticsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StatisticsTitle = styled.h1`
  font-size: 52px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  color: ${color.primaryTextColor};
`;

export const StatisticsSubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${color.darkBorderColor};
  letter-spacing: 2px;
`;

export const StatisticsSubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  font-size: 24px;
  margin-top: 3%;
  background-color: #ffebec;
  padding: 3%;
  border-radius: 5px;
`;

export const EachStatisticsSubjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3%;
  padding-bottom: 2px;
  border-bottom: 0.5px solid gray;
`;

export const StatisticsSubjectTitle = styled.span``;

export const StatisticsSubjectCount = styled.span`
  font-weight: bold;
  > span {
    font-weight: normal;
  }
`;

export const CompetitionTableTitle = styled.h1`
  width: 75%;
  padding-left: 17%;
  padding-top: 105px;
  font-size: 28px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  color: ${color.primaryTextColor};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const CompetitionTableWrapper = styled.div`
  width: 58%;
  height: 400px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin-top: 3%;
  .table-edge {
    border: 1px double black !important;
    width: 100%;
  }
  > table.common_score-table {
    border-spacing: 0px;
    border-collapse: collapse;
    display: table;
    width: 34%;
    height: 100%;
    color: white;
    font-size: 14px;
    .common_score-left {
      width: 50%;
      background-color: #ffebec;
      font-weight: lighter;
      color: black;
    }
    .common_score-top {
      td {
        background-color: #ffebec;
        font-size: 16px;
        line-height: 20px;
      }
    }
    th {
      border: 0.802326px solid lightgray;
      font-size: 16px;
      line-height: 24px;
      background-color: #ffebec !important;
      font-weight: bold !important;
    }
    td {
      border: 0.802326px solid lightgray;
      color: black;
      width: 33% !important;
    }
  }
  > table.meister_score-table {
    width: 55%;
    border-spacing: 0px;
    border-collapse: collapse;
    .meister_score-left {
      width: 20% !important;
      background-color: #ffebec;
      font-size: 14px;
      font-weight: lighter;
    }
    .meister_score-top td {
      background-color: #ffebec;
    }
    th {
      border: 0.802326px solid lightgray;
      width: 40%;
      font-size: 15px;
      font-weight: bold;
      line-height: 24px;
      background-color: #ffebec !important;
    }
    td {
      border: 0.802326px solid lightgray;
    }
  }
`;

export const TotalScore = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
`;

export const CompetitionViewWrapper = styled.table`
  width: 58%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  border-spacing: 0px;
  th {
    width: 50%;
    font-family: Noto Sans KR;
    background-color: #ffebec;
    font-weight: 700;
    font-size: 20px;
    height: 33.33%;
    border: 0.802326px solid lightgray;
  }
  td {
    border: 0.802326px solid lightgray !important;
  }
  .table-edge {
    border: 1px double black;
    width: 100%;
  }
  .competition-table {
    border-collapse: collapse;
    border-spacing: 0px;
    width: 100%;
    text-align: center;
    display: table;

    .competition-table-mid td {
      font-family: Noto Sans;
      background-color: #ffebec;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      height: 33.33%;
    }
    .competition-table-bottom td {
      color: black;
    }
  }
`;

export const CompetitionViewTitle = styled.h1``;

export const CompetitionViewTH = styled.th`
  width: 65%;
  text-align: left;
  font-weight: bold;
  color: ${color.primaryTextColor};
`;

export const CompetitionViewTD = styled.td`
  width: 35%;
  text-align: right;
  font-weight: bold;
  color: ${color.primaryTextColor};

  > b {
    font-weight: bold;
    font-family: "Noto Sans KR-Bold", sans-serif !important;
    color: ${color.lightBorderColor};
  }
`;

export const CompetitionTotalGraphWrapper = styled.div`
  width: 75%;
  height: 265px;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*   margin-right: 10%;
 */
`;

export const CompetitionFreshmanTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;

  > span {
    margin-left: 2%;
  }
`;

export const TotalApplicantScore = styled.div`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  margin-left: 0.6%;
`;

export const TotalCompetitionRate = styled.div`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  margin-left: 0.6%;
`;

export const CompetitionGraphContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  > .graph-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 78%;
  }
  > .graph-region {
    display: flex;
    flex-direction: row;
    width: 11%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-self: flex-end;
    > p {
      text-align: center;
      font-weight: bold;
    }
  }
  .graph-competition-rate {
    width: 11%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > .graph-rate-wrapper {
      display: flex;
      flex-direction: row;
      padding-right: 10px;
      width: 60%;
      justify-content: flex-end;
      font-weight: bold;
      > .rate-end {
        margin-left: 7px;
      }
    }
  }
`;

export const GraphWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffebec;

  /*   margin-bottom: ${pxToRem(14)}rem;
 */
`;

export const GraphTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${color.primaryTextColor};
  font-weight: bold;
  font-size: 15px;
`;

export const GraphChart = styled.div`
  width: 100%;
  height: 100%;

  /* padding-right: 1rem; */
  /*   background-color: ${color.light};*/
`;

export const CommonGraphBar = styled.div<{
  isWidthOfCommonGraphBar;
}>`
  height: 100%;
  background-image: linear-gradient(to left, #f57278, #ff897b);
  border-radius: 0px 50px 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: ${({ isWidthOfCommonGraphBar }) =>
    isWidthOfCommonGraphBar
      ? isWidthOfCommonGraphBar > 5
        ? isWidthOfCommonGraphBar + "%"
        : "25px"
      : "25px"};
  animation: CommonGraphOpa 1.5s ease-in alternate;
  @keyframes CommonGraphOpa {
    from {
      // same 0%
      width: 25px;
    }
    to {
      width: ${({ isWidthOfCommonGraphBar }) =>
        isWidthOfCommonGraphBar
          ? isWidthOfCommonGraphBar > 5
            ? isWidthOfCommonGraphBar + "%"
            : "25px"
          : "25px"};
    }
  }
`;

export const MeisterGraphBar = styled.div<{
  isWidthOfMeisterGraphBar;
}>`
  height: 100%;
  background-image: linear-gradient(to left, #f57278, #ff897b);
  border-radius: 0px 50px 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: ${({ isWidthOfMeisterGraphBar }) =>
    isWidthOfMeisterGraphBar
      ? isWidthOfMeisterGraphBar > 5
        ? isWidthOfMeisterGraphBar + "%"
        : "25px"
      : "25px"};
  animation: MeisterGraphOpa 1.5s ease-in alternate;
  @keyframes MeisterGraphOpa {
    from {
      // same 0%
      width: 25px;
    }
    to {
      width: ${({ isWidthOfMeisterGraphBar }) =>
        isWidthOfMeisterGraphBar
          ? isWidthOfMeisterGraphBar > 5
            ? isWidthOfMeisterGraphBar + "%"
            : "25px"
          : "25px"};
    }
  }
`;

export const SocialGraphBar = styled.div<{
  isWidthOfSocialGraphBar;
}>`
  height: 100%;
  background-image: linear-gradient(to left, #f57278, #ff897b);
  border-radius: 0px 50px 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: ${({ isWidthOfSocialGraphBar }) =>
    isWidthOfSocialGraphBar
      ? isWidthOfSocialGraphBar > 5
        ? isWidthOfSocialGraphBar + "%"
        : "25px"
      : "25px"};
  animation: SocialGraphOpa 1.5s ease-in alternate;
  @keyframes SocialGraphOpa {
    from {
      // same 0%
      width: 25px;
    }
    to {
      width: ${({ isWidthOfSocialGraphBar }) =>
        isWidthOfSocialGraphBar
          ? isWidthOfSocialGraphBar > 5
            ? isWidthOfSocialGraphBar + "%"
            : "25px"
          : "25px"};
    }
  }
`;

export const GraphBarContentText = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: 10px;

  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
`;

export const GraphCompetitionRate = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  letter-spacing: 0.5px;
`;

export const GraphRateBar = styled.div`
  width: 78%;
  margin-left: 11%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-family: Noto Sans KR;
  > #endofnum {
    width: 30px;
  }
`;

export const GraphItemBox = styled.div`
  display: flex;
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
`;
