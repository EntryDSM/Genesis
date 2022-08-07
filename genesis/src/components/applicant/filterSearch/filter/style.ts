import { pxToRem } from 'src/styles';
import styled, {css} from 'styled-components';

export const FilterWrapper = styled.div<{ isContainerWidth: boolean }>`
  ${({isContainerWidth}) => isContainerWidth ?
    css`
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 0 2.5%;
      margin-top: 10px;
    `:
    css`
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 2.5%;
      margin-top: 10px;
    `
  }
`;

export const FilterSelectBox = styled.div<{ isContainerWidth: boolean }>`
  ${({isContainerWidth}) => isContainerWidth ?
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-width: ${pxToRem(752)}rem;
    `:
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 68%;
      min-width: ${pxToRem(752)}rem;
    `
  }
`;

export const FilterButtonContainer = styled.div<{ isContainerWidth: boolean }>`
  ${({isContainerWidth}) => isContainerWidth ?
    css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      min-width: ${pxToRem(320)}rem;
      margin-top: 10px;
    `:
    css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 32%;
      min-width: ${pxToRem(320)}rem;
      margin-top: 10px;
    `
  }
`;

export const FilterItemContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > p {
    display: inline-block;
    color: #3f3f3f;
    margin-left: 4px;
    font-size: 14px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  > strong {
    color : #f57278;
  }
  }
`;
