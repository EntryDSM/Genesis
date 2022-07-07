import styled from 'styled-components';
import { color } from '../../../../../styles/index';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 28rem;
`;

export const DetailInfo = styled.img`
  position: absolute;
  top: 18px;
  left: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  &:last-child {
    margin-right: 60px;
  }

  > p {
    font-size: 14px;
    font-weight: bold;
    height: 22px;
    color: ${color.lightBorderColor};
    margin-left: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-evenly;
  width: 55%;
  margin-left: auto;
  >button{
    margin-left: auto;
  }
`;
