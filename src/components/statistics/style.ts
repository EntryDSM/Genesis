import styled, { StyledComponent } from "styled-components";
import { color, pxToRem } from "../../styles";

export const StatisticsPageContainer = styled.div`
  width: 100%;
  min-height: 1800px;
  overflow-y:hidden;
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
  display:flex;
  flex-direction:column;
  width:30%;
  font-size:24px;
  margin-top:3%;
  background-color:#ffebec;
  padding:3%;
  border-radius:5px;
`;

export const EachStatisticsSubjectWrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-bottom:3%;
  padding-bottom:2px;
  border-bottom:0.5px solid gray;
`;

export const StatisticsSubjectTitle = styled.span`

`;

export const StatisticsSubjectCount = styled.span`
  font-weight:bold;
  >span{
    font-weight:normal;
  }
`;

export const CompetitionTableTitle = styled.h1`
  width: 58%;
/*   margin-top: ${pxToRem(104)}rem;
 */  
  padding-top:105px;
font-size: 28px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  color: ${color.primaryTextColor};
  display:flex;
  flex-direction:row;
  align-items:flex-end;
  
  >div{
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-left:30px;
    >div{
      display:flex;
      flex-direction:row;
      align-items:center;
      
      >p{
        font-size:14px;
      }
    }
  }
`;

export const StatisticsColorBox = styled.div`
        width:12px;
        height:12px;
        border-radius:100%;
        margin-left:5px;
        margin-right:10px;
`

export const CompetitionTableWrapper = styled.div`
  width: 58%;
  height: 400px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin-top:3%;
  > table.common_score-table {
    border-spacing: 0px;
    border-collapse: collapse;
    width: 40%;
    height: 100%;
    border: 0.802326px solid #000000;
    color: white;
    .common_score-left {
      width: 40%;
      background-color: #ff9b9f;
      font-weight: lighter;
      color:white;
    }
    th {
      border: 0.802326px solid #000000;
      font-size: 17px;
      line-height: 24px;
      background-color: #f57278 !important;
      font-weight: bold !important;
    }
    td {
      border: 0.802326px solid #000000;
      color:black;
    }
  }
  > table.meister_score-table {
    width: 55%;
    border: 0.802326px solid #000000;
    border-spacing: 0px;
    border-collapse: collapse;
    color:white;
    .meister_score-left{
      width:20% !important;
      background-color:#FF9B9F; 
      font-size:14px;
      color:white;
      font-weight:lighter;

    }
    .meister_score-top td{
      font-weight:bold;
      background-color:#FF9B9F;
      color:white !important;
    }
    th {
      border: 0.802326px solid #000000;
      width:40%;
      font-size:12px;
      line-height:24px;
      background-color:#F57278 !important;
    }
    td {
      border: 0.802326px solid #000000;
      color:black;
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
  /* width: 30%;
  font-size: 24px;
  margin-top: 40px;
  tr:last-child {
    width: 100%;
  }

  tr {
    display: flex;
    justify-content: space-evenly;
    line-height: 45px;
  } */
  width: 58%;
  height: 170px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  border: 0.5px solid #505050;
  .competition-table {
    border-spacing: 0px;
    border-collapse: separate;
    width: 100%;
    text-align: center;
    color: white;

    .competition-table-top td {
      border: 0.5px solid #505050;
      width: 50%;
      font-family: Noto Sans KR;
      background-color: #f57278;
      font-weight: 700;
      font-size: 20px;
      height: 33.33%;
    }
    .competition-table-mid td {
      border: 0.5px solid #505050;
      background-color: #ff9b9f;
      font-family: Noto Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      height: 33.33%;
    }
    .competition-table-bottom td {
      border: 0.5px solid #505050;
      color: black;
    }
  }
`;

export const CompetitionViewTitle = styled.h1`

`;

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
  
  width: 58%;
  height:352px;
  margin-top: 3%;
/*   margin-right: 10%;
 */`;

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
  
  height:334px;
  display:flex;
  flex-direction:column;
  >.graph-wrapper{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    height:100%;
    width:94%;
    margin-left:6%;
  }
  >.graph-region{
    display: flex;
    flex-direction: row;
    margin-left:6%;
    width:94%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    justify-self:flex-end;
    >span{
      width:13%;
      font-size:100%;
      text-align:center;
      
    }
  }
  

`;

export const GraphWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  width:94px;
  
/*   margin-bottom: ${pxToRem(14)}rem;
 */`;

export const GraphTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${color.primaryTextColor};
  font-weight: bold;
  font-size: 15px;
`;

export const GraphChart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  position:absolute;
  width: ${pxToRem(94)}rem;
  
  /* padding-right: 1rem; */
  /*   background-color: ${color.light};*/
`;

export const CommonGraphBar = styled.div<{ isWidthOfCommonGraphBar; is_daejeon }>`
  height: ${({ isWidthOfCommonGraphBar }) =>
    isWidthOfCommonGraphBar ? isWidthOfCommonGraphBar>5?(310/100)*(isWidthOfCommonGraphBar)*1.07:(310/100)*5 : 0}px;
  width: 42px;
  background-image: ${(props) =>
    props.is_daejeon
      ? "linear-gradient(to bottom,#f57278,#ff897b)"
      : "linear-gradient(to bottom,#FF9B9F,#FF9B9F)"};
  border-radius: 25px 25px 0px 0;
  animation: CommonGraphOpa 1.5s ease-in Alternate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @keyframes CommonGraphOpa {
    from {
      // same 0%
      height:${(310/100)*5}px
    }

    to {
      // same 100%
      height: ${({ isWidthOfCommonGraphBar }) =>
    isWidthOfCommonGraphBar ? isWidthOfCommonGraphBar>5?(310/100)*(isWidthOfCommonGraphBar)*1.07:(310/100)*5 : (310/100)*5}px;
    }
  }
`;

export const MeisterGraphBar = styled.div<{ isWidthOfMeisterGraphBar,is_daejeon }>`
  height: ${({ isWidthOfMeisterGraphBar }) =>
    isWidthOfMeisterGraphBar ? isWidthOfMeisterGraphBar>5?(310/100)*(isWidthOfMeisterGraphBar)*1.07:(310/100)*5 : 0}px;
  width: 42px;
  background-image: ${(props) =>
    props.is_daejeon
      ? "linear-gradient(to bottom,#f57278,#ff897b)"
      : "linear-gradient(to bottom,#FF9B9F,#FF9B9F)"};
  border-radius: 25px 25px 0px 0;
  animation: MeisterGraphOpa 1.5s ease-in Alternate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @keyframes MeisterGraphOpa {
    from {
      // same 0%
      height:${(310/100)*5}px
    }

    to {
      // same 100%
      height: ${({ isWidthOfMeisterGraphBar }) =>
    isWidthOfMeisterGraphBar ? isWidthOfMeisterGraphBar>5?(310/100)*(isWidthOfMeisterGraphBar)*1.07:(310/100)*5 : (310/100)*5}px;
    }
  }
`;

export const SocialGraphBar = styled.div<{ isWidthOfSocialGraphBar,is_daejeon }>`
  height: ${({ isWidthOfSocialGraphBar }) =>
    isWidthOfSocialGraphBar ? isWidthOfSocialGraphBar>5?(310/100)*(isWidthOfSocialGraphBar)*1.07:(310/100)*5 : 0}px;
  width: 42px;
  background-image: ${(props) =>
    props.is_daejeon
      ? "linear-gradient(to bottom,#f57278,#ff897b)"
      : "linear-gradient(to bottom,#FF9B9F,#FF9B9F)"};
  border-radius: 25px 25px 0px 0;
  animation: SocialGraphOpa 1.5s ease-in Alternate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  

  @keyframes SocialGraphOpa {
    from {
      // same 0%
      height:${(310/100)*5}px
    }

    to {
      // same 100%
      height: ${({ isWidthOfSocialGraphBar }) =>
    isWidthOfSocialGraphBar ? isWidthOfSocialGraphBar>5?(310/100)*(isWidthOfSocialGraphBar)*1.07:(310/100)*5 : (310/100)*5}px;
    }
  }
`;

export const GraphBarContentText = styled.span<{ isWidthOfGraphBar }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 96%;
  
  color:${({isWidthOfGraphBar})=>isWidthOfGraphBar?"white":"rgba(0,0,0,0)"};
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
  width:40.5%;
  height:322px;
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
`;

export const EachGraphRateBarWrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  color:#C5C5C5;
  >span{
    width:20px;
    text-align:center;
    font-weight:bold;
  }
  >div{
    border-bottom:1.5px solid #C5C5C5;
    width:96%;
  }
`;


export const GraphItemBox = styled.div`
  display: flex;
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
`;
