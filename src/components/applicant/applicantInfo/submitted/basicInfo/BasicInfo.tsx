import React, { FC } from "react";
import * as S from "./style";
import {
  returnApplicationType,
  returnApplicationRemark,
  returnEducationalType,
} from "src/utils/checkType";

interface Props {
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
  applicantCommonInformation: {
    name: string;
    school_name: string;
  };
}

const BasicInfo: FC<Props> = ({
  applicantMoreInformation: {
    photo_url,
    birthday,
    education_status,
    application_type,
    application_remark,
    address,
    detail_address,
  },
  applicantCommonInformation: { name, school_name },
}) => {
  const checkApplicationType = React.useCallback(() => {
    return returnApplicationType(application_type);
  }, [application_type]);
  const checkApplicationRemark = React.useCallback(() => {
    return returnApplicationRemark(application_remark);
  }, [application_remark]);
  const checkEducationalType = React.useCallback(() => {
    return returnEducationalType(education_status);
  }, [education_status]);

  return (
    <S.Wrapper>
      <S.IDPicture src={photo_url} alt="ID Photo" />
      <ul>
        <S.InfoLine isOneLine={true}>
          <h3>{name}</h3> <p>{birthday}</p>
        </S.InfoLine>
        <S.InfoLine isOneLine={false}>
          {(school_name ? school_name + " " : "") +
            checkEducationalType() +
            " " +
            checkApplicationType()}
          <p />
          {checkApplicationRemark()}
        </S.InfoLine>
        <S.InfoLine isOneLine={false}>
          <p>{address}</p>
          <p>{detail_address}</p>
        </S.InfoLine>
      </ul>
    </S.Wrapper>
  );
};
export default BasicInfo;
