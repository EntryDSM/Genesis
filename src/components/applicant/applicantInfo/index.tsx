import React, { FC } from "react";
import UnSubmitted from "./unSubmitted";
import Submitted from "./submitted";
import {
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
  UpdateApplicantPaidStatusPayload,
  UpdateApplicantSubmitStatusPayload,
} from "src/data/api/apiTypes";

interface Props {
  isContainerWidth: boolean;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
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

const ApplicantInfo: FC<Props> = ({
  isContainerWidth,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  updateApplicantPaidStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
}) => {
  const filterResponse = applicantsList.applicants.filter((i) => {
    return i.name === currnetApplicantInfo?.common_information?.name;
  });
  if (currnetApplicantInfo.more_information) {
    return (
      <>
        {applicantsList.applicants &&
          filterResponse.map((info) => (
            <Submitted
              isContainerWidth={isContainerWidth}
              applicantCommonInformation={
                currnetApplicantInfo.common_information
              }
              applicantMoreInformation={currnetApplicantInfo.more_information}
              applicantEvaluation={currnetApplicantInfo.evaluation}
              applicantStatus={currnetApplicantInfo.status}
              applicantListItem={info}
              updateApplicantStatusStatus={updateApplicantStatusStatus}
              updateApplicantStatus={updateApplicantStatus}
              updateApplicantPaidStatus={updateApplicantPaidStatus}
              updateApplicantSubmitStatus={updateApplicantSubmitStatus}
              setIsContainerWidth={setIsContainerWidth}
            />
          ))}
      </>
    );
  } else {
    return (
      <UnSubmitted
        isContainerWidth={isContainerWidth}
        applicantCommonInfomation={currnetApplicantInfo.common_information}
        setIsContainerWidth={setIsContainerWidth}
      />
    );
  }
};

export default ApplicantInfo;
