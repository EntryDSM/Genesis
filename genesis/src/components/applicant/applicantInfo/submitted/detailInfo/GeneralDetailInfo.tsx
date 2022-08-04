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
    <S.DetailInfoTable>
      <tbody>
        <tr>
          <th>이메일</th>
          <td>{applicantCommonInformation.email}</td>
        </tr>
        <tr>
          <th>학생 연락처</th>
          <td>{setContactForm(applicantCommonInformation.telephone_number)}</td>
          <th>학부모 연락처</th>
          <td>{setContactForm(applicantCommonInformation.parent_tel)}</td>
        </tr>
        <tr>
          <th>학교 연락처</th>
          <td>{setContactForm(applicantCommonInformation.school_tel)}</td>
          {/* <th>자택 연락처</th>
          <td>{setContactForm(applicantCommonInformation.)}</td> */}
        </tr>
        <tr></tr>
        <tr>
          <th>봉사시간</th>
          <td>{applicantEvaluation.volunteer_time || 0} 시간</td>
          <th>성적 점수</th>
          <td>{applicantEvaluation.conversion_score || 0} 점</td>
        </tr>
        <tr>
          <th rowSpan={2}>출석정보</th>
          <td>
            <div>
              <span>전체 무단 결석 일수</span>
              <span>{applicantEvaluation.day_absence_count || 0}</span>
            </div>
          </td>
          <td colSpan={2}>
            <div>
              <span>전체 무단 조퇴 일수</span>
              <span>{applicantEvaluation.early_leave_count || 0}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span>전체 무단 지각 일수</span>
              <span>{applicantEvaluation.lateness_count || 0}</span>
            </div>
          </td>
          <td colSpan={2}>
            <div>
              <span>전체 무단 결과 일수</span>
              <span>{applicantEvaluation.lecture_absence_count || 0}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </S.DetailInfoTable>
  );
};
export default DetailInfo;
