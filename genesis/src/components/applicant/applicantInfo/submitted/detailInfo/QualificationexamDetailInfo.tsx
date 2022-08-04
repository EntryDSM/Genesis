import React, { FC } from "react";

import * as S from "./style";
import { phoneWithHyphen } from "src/utils/checkType";

interface Props {
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
  applicantCommonInformation,
  applicantEvaluation,
}) => {
  const setContactForm = React.useCallback((contact: string) => {
    return phoneWithHyphen(contact);
  }, []);

  return (
    <S.QualificationexamDetailInfoTable>
      <tbody>
        <tr>
          <th>학생 연락처</th>
          <td>{setContactForm(applicantCommonInformation.telephone_number)}</td>
        </tr>
        <tr>
          <th>학부모 연락처</th>
          <td>{setContactForm(applicantCommonInformation.parent_tel)}</td>
        </tr>
        <tr>
          <th>이메일</th> <td>{applicantCommonInformation.email}</td>
        </tr>
        {/* <tr>
          <th>자택 연락처</th> <td>{setContactForm(applicantCommonInformation.)}</td>
        </tr> */}
        <tr>
          <th>검정고시 평균 점수</th>{" "}
          <td>{applicantEvaluation.conversion_score}점</td>
        </tr>
      </tbody>
    </S.QualificationexamDetailInfoTable>
  );
};
export default DetailInfo;
