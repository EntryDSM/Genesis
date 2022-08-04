import React, { FC } from "react";

import QualificationexamDetailInfo from "./QualificationexamDetailInfo";
import GeneralDetailInfo from "./GeneralDetailInfo";

interface Props {
  isQUALIFICATION_EXAM: boolean;
  applicantCommonInformation: {
    name: string;
    school_name: string;
    email: string;
    telephone_number: string;
    school_tel?: string;
    parent_tel: string;
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
}

const DetailInfo: FC<Props> = ({
  isQUALIFICATION_EXAM,
  applicantCommonInformation,
  applicantEvaluation,
}) => {
  return isQUALIFICATION_EXAM ? (
    <QualificationexamDetailInfo
      applicantCommonInformation={applicantCommonInformation}
      applicantEvaluation={applicantEvaluation}
    />
  ) : (
    <GeneralDetailInfo
      applicantCommonInformation={applicantCommonInformation}
      applicantEvaluation={applicantEvaluation}
    />
  );
};

export default DetailInfo;
