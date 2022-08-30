import React, { FC } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { details_arrow } from "src/assets/applicants";
import { Checkbox, Button } from "src/components/common";
import {
  UpdateApplicantStatusPayload,
  UpdateApplicantPaidStatusPayload,
  UpdateApplicantSubmitStatusPayload,
} from "src/data/api/apiTypes";
import useModal from "src/hooks/modal";

interface Props {
  isContainerWidth: boolean;
  is_prints_arrived: boolean;
  receipt_code: number;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantPaidStatus: (
    payload: UpdateApplicantPaidStatusPayload
  ) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  setIsContainerWidth: (payload: boolean) => void;
}

const ApplicantStatuses: FC<Props> = ({
  isContainerWidth,
  is_prints_arrived,
  receipt_code,
  updateApplicantStatus,
  updateApplicantPaidStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
}) => {
  const navigate = useNavigate();

  const handleClickDetailArrow = () => {
    setIsContainerWidth(!isContainerWidth);
  };
  const { onChangeModal } = useModal();
  const handleClickNotArrived = async (
    receipt_code: number,
    is_prints_arrived: boolean
  ) => {
    onChangeModal("APPLICATION_ARRIVED", receipt_code);
  };
  // 필요해지면 써요
  // const handleClickUpdatePaid = async (receipt_code: number) => {
  //   if (window.confirm("지원자의 원서료 지불 여부를 수정하시겠습니까?")) {
  //     await updateApplicantPaidStatus({ receipt_code });
  //   }
  //   if (updateApplicantStatus) {
  //     setTimeout(() => navigate(0), 300);
  //   }
  // };

  const handleClickCancelSubmitted = async (receipt_code: number) => {
    onChangeModal("CANCLE_FINAL_SUBMIT", receipt_code);
  };

  return (
    <S.Wrapper>
      <S.DetailInfo
        src={details_arrow}
        onClick={() => handleClickDetailArrow()}
      />
      <S.CheckboxContainer
        onClick={() => handleClickNotArrived(receipt_code, !is_prints_arrived)}
      >
        <Checkbox isChecked={is_prints_arrived} />
        <p>원서 도착 확인</p>
      </S.CheckboxContainer>
      <S.ButtonContainer>
        <Button
          className="applicant-info__cancel-btn"
          onClick={() => handleClickCancelSubmitted(receipt_code)}
        >
          최종제출 취소
        </Button>
        {/*원서료 지불할 일 생기면 다시 쓰세요 ㅎㅎ*/}
        {/*<Button*/}
        {/*  className="applicant-info__fee-btn"*/}
        {/*  onClick={() => handleClickUpdatePaid(receipt_code)}*/}
        {/*>*/}
        {/*  원서료 지불 수정*/}
        {/*</Button>*/}
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default ApplicantStatuses;
