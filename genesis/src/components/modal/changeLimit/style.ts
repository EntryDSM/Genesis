import styled from "styled-components";

export const Background = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  border-collapse: collapse;
  width: 700px;
  height: 550px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nanum Gothic", sans-serif;
`;

export const TableWrapper = styled.div`
  width: 450px;
  height: 380px;
`;

export const TrWrapper = styled.div`
  border-bottom: 2px solid #ededed;
  width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleBlock = styled.div`
  height: 50px;
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #f57278;
  }
`;

export const NormalBlock = styled.div`
  width: 33.33%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  > #title {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    color: #0c0c0c;
  }
`;

export const SpreadBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-left: 2px solid #ededed;
  > p {
    width: 115px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #242424;
  }
`;

export const InputWrapper = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 34px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  > input {
    width: 80%;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Title = styled.p`
  position: absolute;
  font-weight: 900;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
  top: 23px;
  left: 35px;
`;

export const Button = styled.div`
  width: 100px;
  height: 42px;
  background: #f57278;
  border-radius: 5px;
  position: absolute;
  bottom: 22px;
  right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;
