import React, { FC } from "react";
import * as S from "./style";
import { details_arrow } from "src/assets/applicants";
import { phoneWithHyphen } from "src/utils/checkType";

interface Props {
  isContainerWidth: boolean;
  applicantCommonInfomation: {
    name: string;
    school_name: string;
    email: string;
    telephone_number: string;
    school_tel?: string;
    parent_tel: string;
  };
  setIsContainerWidth: (payload: boolean) => void;
}

const Unsubmitted: FC<Props> = ({
  isContainerWidth,
  applicantCommonInfomation: {
    name,
    school_name,
    email,
    telephone_number,
    school_tel,
    parent_tel,
  },
  setIsContainerWidth,
}) => {
  const setContactForm = React.useCallback((contact: string) => {
    return phoneWithHyphen(contact);
  }, []);

  const handleClickDetailArrow = () => {
    setIsContainerWidth(!isContainerWidth);
  };

  return (
    <S.Wrapper>
      <S.DetailInfo
        src={details_arrow}
        onClick={() => handleClickDetailArrow()}
      />
      <h3>최종제출을 하지 않은 지원자입니다.</h3>
      <table>
        <tbody>
          <S.BasicInfoTableTR>
            <th>이름</th>
            <td>{name}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학교 이름</th>
            <td>{school_name}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>이메일</th>
            <td>{email}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>학생 연락처</th>
            <td>{setContactForm(telephone_number)}</td>
          </S.BasicInfoTableTR>
          <S.BasicInfoTableTR>
            <th>부모님 연락처</th>
            <td>{setContactForm(parent_tel)}</td>
          </S.BasicInfoTableTR>
          {
            school_tel &&
            <S.BasicInfoTableTR>
              <th>학교 연락처</th>
              <td>{setContactForm(school_tel)}</td>
            </S.BasicInfoTableTR>
          }
        </tbody>
      </table>
    </S.Wrapper>
  );
};

export default Unsubmitted;
