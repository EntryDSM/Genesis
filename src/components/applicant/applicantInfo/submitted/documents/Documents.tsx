import React, { FC } from "react";

import * as S from "./style";

interface Props {
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

const Documents: FC<Props> = ({ applicantEvaluation }) => {
  const [selectedItem, setSelectedItem] = React.useState("자기소개서");

  const handleClickContent = React.useCallback(
    (content: string) => {
      setSelectedItem(content);
    },
    [selectedItem]
  );

  const contents = ["자기소개서", "학업계획서"];

  return (
    <S.Wrapper>
      <S.ContentSelector>
        {contents.map((v) => (
          <span
            onClick={() => handleClickContent(v)}
            key={v}
            className={selectedItem === v ? "selected" : ""}
          >
            {v}
            <div key={v} className={selectedItem === v ? "selected" : ""} />
          </span>
        ))}
      </S.ContentSelector>
      <S.Document>
        {selectedItem === contents[0]
          ? applicantEvaluation.self_introduce
          : applicantEvaluation.study_plan}
      </S.Document>
    </S.Wrapper>
  );
};

export default Documents;
