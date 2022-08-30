import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import AlertModal from "src/components/modal/alert";
import {
  updateApplicantStatusApi,
  updateApplicantSubmitStatusApi,
} from "src/data/api/applicant/applicantApi";
import { updateApplicantStatus } from "src/data/modules/redux/action/applicant";
import { changeModalStatus } from "src/data/modules/redux/action/modal";
import { useSelectState } from "src/hooks/default";
import useModal from "src/hooks/modal";
import {
  LoginContainer,
  MainContainer,
  ScheduleContainer,
  StatisticsContainer,
  ApplicantContainer,
} from "../containers";
import HeaderContainer from "../containers/header";

const describtion = {
  APPLICATION_ARRIVED: {
    title: "원서 도착 확인",
    summary: "지원자의 원서 도착 여부를 수정하시겠습니까?",
  },
  CANCLE_FINAL_SUBMIT: {
    title: "최종 제출 취소",
    summary: "지원자의 최종 제출 상태를 수정하시겠습니까?",
  },
};

const MainRouter = () => {
  const modalStatus = useSelectState().modal;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onChangeModal } = useModal();
  const is_prints_arrived =
    useSelectState().applicant.currnetApplicantInfo.status.is_prints_arrived;
  const confirmChangePrintArrviedStatus = () => {
    updateApplicantStatusApi("", {
      receipt_code: modalStatus.selectedReceiptCode,
      is_prints_arrived,
    }).then(() => {
      onChangeModal("", undefined);
      setTimeout(() => navigate(0), 300);
    });
  };
  const confirmCancelFinalSubmit = () => {
    updateApplicantSubmitStatusApi("", {
      receipt_code: modalStatus.selectedReceiptCode,
    }).then(() => {
      onChangeModal("", undefined);
      setTimeout(() => navigate(0), 300);
    });
  };
  const modal = useMemo(() => {
    switch (modalStatus.selectedModal) {
      case "APPLICATION_ARRIVED":
        return (
          <AlertModal
            title={describtion.APPLICATION_ARRIVED.title}
            summary={describtion.APPLICATION_ARRIVED.summary}
            confirmFunction={confirmChangePrintArrviedStatus}
          />
        );
      case "CANCLE_FINAL_SUBMIT":
        return (
          <AlertModal
            title={describtion.CANCLE_FINAL_SUBMIT.title}
            summary={describtion.CANCLE_FINAL_SUBMIT.summary}
            confirmFunction={confirmCancelFinalSubmit}
          />
        );
      default:
        return <></>;
    }
  }, [modalStatus.selectedModal, modalStatus.selectedReceiptCode]);
  useEffect(() => {
    if (modalStatus.selectedModal === "APPLICATION_ARRIVED") console.log("asd");
  }, [modalStatus.selectedModal]);
  return (
    <>
      <HeaderContainer />
      {modal}
      {/* <AlertModal
        title={describtion.APPLICATION_ARRIVED.title}
        summary={describtion.APPLICATION_ARRIVED.summary}
        confirmFunction={confirmChangePrintArrviedStatus}
      /> */}
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<MainContainer />} />
        <Route path="/total" element={<StatisticsContainer />} />
        <Route path="/schedule" element={<ScheduleContainer />} />
        <Route path="/applicant" element={<ApplicantContainer />} />
      </Routes>
    </>
  );
};

export default MainRouter;
