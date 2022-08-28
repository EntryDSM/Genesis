import styled, { css } from "styled-components";
import { color, pxToRem } from "../../styles";

export const Schedule = styled.div`
  width: 100%;
  min-height: 96vh;
  min-width: ${pxToRem(1320)}rem;
  box-sizing: border-box;
`;

export const ScheduleWrapper = styled.div`
  height: 100%;
  padding: 0px ${pxToRem(160)}rem;
  padding-top: ${pxToRem(160)}rem;
`;

export const ScheduleContentsBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: ${pxToRem(55)}rem;
`;

export const ScheduleButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${pxToRem(30)}rem;

  & > Button {
    border: 1px solid ${color.primaryColor};
    background-image: linear-gradient(91deg, #ff8888 1%, #f57278 100%);
  }
`;

export const ScheduleContent = styled.div`
  border: 1px solid ${color.fail};
  border-radius: 10px;
  width: 225px;
  height: 430px;
`;

export const ScheduleContentBox = styled.div`
  padding: 0 ${pxToRem(20)}rem;
  height: 100%;
`;

export const ScheduleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(25)}rem 1rem;
  font-weight: bold;
  font-family: "Noto Sans KR-Bold", sans-serif !important;
  font-size: 14px;
  color: ${color.primaryTextColor};
`;

export const ScheduleImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;

  & > img {
    width: 90px;
    height: 91px;
  }
`;

export const ScheduleDate = styled.div`
  padding-top: 35px;
`;

export const ScheduleDateTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
  color: ${color.primaryTextColor};

  &.scheduleSelectBox-tail {
    padding-top: ${pxToRem(20)}rem;
  }
  &.dead-line {
    padding: 8px 0;
  }
`;

export const ScheduleDateBody = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const ScheduleDateSelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const ScheduleSelectDivision = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: ${color.primaryTextColor};
`;

export const ScheduleTimeSelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  q:before {
    content: ":";
    font-size: 32px;
    font-weight: bold;
  }
`;

export const Select = styled.div<{
  disabled: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ disabled }) => css`
    width: 36%;
    border: 1px solid ${disabled === "disabled" ? color.disable : "black"};
    color: ${disabled === "disabled" ? color.disable : "black"};
    background-color: ${disabled === "block" ? "#f1f1f1" : "#ffffff"};
  `}
  height: 38px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
  position: relative;
  cursor: pointer;
`;

export const SelectBox = styled.label`
  width: 56px;
  height: 38px;
  border-bottom: 1px solid black;
  //border-radius: 5px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemWrapper = styled.ul`
  position: absolute;
  width: 56px;
  border: 1px solid black;
  border-top: none;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  height: 120px;
  overflow: scroll;
  background-color: white;
`;
export const Item = styled.li`
  color: black;
  height: 30px;
  box-sizing : border-box;
  padding: 2px 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  
  :hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
