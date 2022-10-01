import React, { FC } from "react";
import * as S from "../style";
import { Checkbox } from "src/components/common";
import { returnRegion, returnApplicationType } from "src/utils/checkType";
import {
  ApplicantListItem,
  GetApplicantInfoResponse,
} from "src/data/api/apiTypes";

interface Props {
  currnetApplicantInfo: GetApplicantInfoResponse;
  applicantInfo: ApplicantListItem;
  handleClick: (receipt_code: number) => void;
}

const ApplicantsListItem: FC<Props> = ({
  currnetApplicantInfo,
  applicantInfo: {
    receipt_code,
    name,
    email,
    is_daejeon,
    application_type,
    is_prints_arrived,
    is_submitted,
    is_out_of_headcount,
  },
  handleClick,
}) => {
  const checkRegion = React.useCallback(() => {
    return returnRegion(is_daejeon);
  }, [is_daejeon]);
  const checkApplyType = React.useCallback(() => {
    return returnApplicationType(application_type);
  }, [application_type]);
  const checkSubmitStatus = React.useCallback(
    () => (is_submitted ? "완료" : "미완료"),
    [is_submitted]
  );
  return (
    <>
      <S.TR
        isSelected={email === currnetApplicantInfo?.common_information.email}
        onClick={() => handleClick(receipt_code)}
      >
        <S.TD>{receipt_code}</S.TD>
        <S.TD>{name}</S.TD>
        <S.TD>{checkRegion()}</S.TD>
        <S.TD>
          {checkApplyType()}
          <span>{is_out_of_headcount && "*"}</span>
        </S.TD>
        <S.TD>
          <S.CheckboxWrapper>
            <Checkbox isChecked={is_prints_arrived} />
          </S.CheckboxWrapper>
        </S.TD>
        <S.TD>{checkSubmitStatus()}</S.TD>
      </S.TR>
    </>
  );
};

export default React.memo(ApplicantsListItem);
