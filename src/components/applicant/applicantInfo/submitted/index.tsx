import React, { FC } from "react";
import * as S from "./style";
import ApplicantStatusContainer from "./applicantStatus";
import BasicInfo from "./basicInfo";
import DetailInfo from "./detailInfo";
import Documents from "./documents";
import {
  ApplicantListItem,
  UpdateApplicantStatusPayload,
  UpdateApplicantPaidStatusPayload,
  UpdateApplicantSubmitStatusPayload,
  GetApplicantInfoPayload,
} from "src/data/api/apiTypes";
import { returnEducationalType } from "src/utils/checkType";

interface Props {
  isContainerWidth: boolean;
  applicantStatus: {
    is_prints_arrived;
  };
  applicantCommonInformation: {
    name: string;
    school_name: string;
    email: string;
    telephone_number: string;
    school_tel?: string;
    parent_tel: string;
  };
  applicantMoreInformation: {
    photo_url: string;
    birthday: string;
    education_status: string;
    application_type: string;
    application_remark: string;
    address: string;
    detail_address: string;
    head_count: string;
  };
  applicantEvaluation: {
    volunteer_time: number;
    conversion_score: number;
    day_absence_count: number;
    lecture_absence_count: number;
    early_leave_count: number;
    lateness_count: number;
    self_introduce: string;
    study_plan: string;
    average_score: number;
  };
  applicantListItem: ApplicantListItem;
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

const Submitted: FC<Props> = ({
  isContainerWidth,
  applicantStatus,
  applicantCommonInformation,
  applicantMoreInformation,
  applicantEvaluation,
  applicantListItem,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  updateApplicantPaidStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
}) => {
  const checkGradeType = React.useCallback(() => {
    return (
      returnEducationalType(applicantMoreInformation.education_status) ===
      "검정고시"
    );
  }, [applicantMoreInformation.education_status]);

  return (
    <S.Wrapper>
      <ApplicantStatusContainer
        isContainerWidth={isContainerWidth}
        is_prints_arrived={applicantListItem.is_prints_arrived}
        receipt_code={applicantListItem.receipt_code}
        updateApplicantStatusStatus={updateApplicantStatusStatus}
        updateApplicantStatus={updateApplicantStatus}
        updateApplicantPaidStatus={updateApplicantPaidStatus}
        updateApplicantSubmitStatus={updateApplicantSubmitStatus}
        setIsContainerWidth={setIsContainerWidth}
      />
      <BasicInfo
        applicantMoreInformation={applicantMoreInformation}
        applicantCommonInformation={applicantCommonInformation}
      />
      <DetailInfo
        isQUALIFICATION_EXAM={checkGradeType()}
        applicantCommonInformation={applicantCommonInformation}
        applicantEvaluation={applicantEvaluation}
      />
      <Documents applicantEvaluation={applicantEvaluation} />
    </S.Wrapper>
  );
};

export default Submitted;
