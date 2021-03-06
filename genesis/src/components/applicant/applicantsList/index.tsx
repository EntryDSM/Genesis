import React, { FC } from "react";
import * as S from "./style";
import ApplicantsListHeader from "./applicantsListHeader";
import ApplicantsListItem from "./applicantsListItem";
import {
  GetApplicantsListResponse,
  GetApplicantInfoResponse,
  GetApplicantInfoPayload,
} from "src/data/api/apiTypes";

interface Props {
  isContainerWidth: boolean;
  currnetApplicantInfo: GetApplicantInfoResponse;
  applicantsList: GetApplicantsListResponse;
  setIsContainerWidth: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantsList: FC<Props> = ({
  isContainerWidth,
  currnetApplicantInfo,
  applicantsList,
  setIsContainerWidth,
  getApplicantInfo,
}) => {
  const handleClickListItem = React.useCallback((receipt_code: number) => {
    getApplicantInfo({ receipt_code });
    setIsContainerWidth(!isContainerWidth);
  }, []);

  return (
    <S.ApplicantsList>
      <ApplicantsListHeader />
      <tbody className="no-select">
        {applicantsList.applicants &&
          applicantsList.applicants.map((info) => (
            <ApplicantsListItem
              currnetApplicantInfo={currnetApplicantInfo}
              key={info.receipt_code}
              applicantInfo={info}
              handleClick={handleClickListItem}
            />
          ))}
      </tbody>
    </S.ApplicantsList>
  );
};

export default ApplicantsList;
