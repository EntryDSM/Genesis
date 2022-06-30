import styled, { css } from "styled-components";
import { color, pxToRem } from "../../styles";

export const Applicant = styled.div<{ isContainerWidth?: boolean }>`
  ${({isContainerWidth}) => 
    isContainerWidth ?
      css`
        position: relative;
        width: 100%;
        min-width: ${pxToRem(1136)}rem;
        min-height: 96vh;
        display: flex;
        background: ${color.backgorund};
        box-sizing: border-box;
        padding-top: 75px;
        overflow: hidden;
      ` : 
      css`
        width: 80%;
        min-width: ${pxToRem(1136)}rem;
        min-height: 96vh;
        display: flex;
        background: ${color.backgorund};
        box-sizing: border-box;
        padding-top: 75px;
        margin: 0 auto;
        transition: all ease 1.3s;
        overflow: hidden;
      ` 
  }
`;

export const ApplicantContainer = styled.div<{ isContainerWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isContainerWidth }) => 
    isContainerWidth ?
      css`
        width: 60%;
        transition: all ease 1.3s;
      ` : 
      css`
        width: 100%;
        transition: all ease 1.3s;
      `  
  };
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 8%;
`;

export const ApplicantInfoWrap = styled.div<{
    isContainerWidth?: boolean, 
  }>`
  position: absolute;
  z-index: 1;
  top: 60px;
  right: 0;
  ${({ isContainerWidth }) => 
    isContainerWidth ?
      css`
        width: 40%;
        transition: all ease 1.2s;
      ` : 
      css`
        width: 0%;
        transition: all ease 1.2s;
      `  
  };
  height: 100%;
`;