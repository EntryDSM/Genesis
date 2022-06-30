import styled, {css} from 'styled-components';

const FilterSearchWrapper = styled.div<{ isContainerWidth: boolean }>`
  ${({isContainerWidth}) => isContainerWidth ?
    css`
      width: 100%;
      height: 18%;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      box-sizing: border-box;
      justify-content: flex-end;
      position: relative;
    `:
    css`
      width: 100%;
      height: 14%;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      box-sizing: border-box;
      justify-content: flex-end;
      position: relative;
    `
  }
`;

export default FilterSearchWrapper;
