import OutsideClickHandler from "react-outside-click-handler";
import useModal from "src/hooks/modal";
import styled from "styled-components";
import closeIcon from "../../assets/modal/close.svg";

interface Props {
  title: string;
  summary: string;
  confirmFunction: () => void;
}

const AlertModal = ({ title, summary, confirmFunction }: Props) => {
  const { onChangeModal } = useModal();
  const closeModal = () => {
    onChangeModal("", undefined);
  };
  return (
    <Wrapper>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <ModalWrapper>
          <Header>
            <Notification>알림</Notification>
            <Close src={closeIcon} alt="닫기" onClick={closeModal} />
          </Header>
          <Body>
            <Title>{title}</Title>
            <Summary>{summary}</Summary>
          </Body>
          <Footer>
            <Button onClick={confirmFunction}>알겠습니다</Button>
          </Footer>
        </ModalWrapper>
      </OutsideClickHandler>
    </Wrapper>
  );
};
export default AlertModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
`;
const ModalWrapper = styled.div`
  width: 530px;
  height: 329px;
  border-radius: 10px;
  background-color: #ffffff;
`;
const Header = styled.header`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c5c5c5;
`;
const Notification = styled.strong`
  font-size: 18px;
  font-weight: 700;
  color: #c5c5c5;
  font-family: "NanumGothic";
`;
const Close = styled.img`
  cursor: pointer;
`;
const Body = styled.div`
  width: 100%;
  height: 227px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin-top: 70px;
  font-size: 24px;
  font-weight: 700;
  font-family: "NanumGothic";
`;
const Summary = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
  font-family: "NanumGothic";
  width: 230px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  color: #5f5f5f;
`;
const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid #c5c5c5;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: center;
`;
const Button = styled.button`
  width: 300px;
  height: 40px;
  border: 1px solid #f57278;
  border-radius: 5px;
  color: #f57278;
  font-size: 18px;
  font-weight: bold;
  font-family: "NanumGothic";
  :hover {
    color: white;
    background-color: #f57278;
  }
`;
