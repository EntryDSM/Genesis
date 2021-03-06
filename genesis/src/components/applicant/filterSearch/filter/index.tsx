import React, { FC } from "react";
import * as S from "./style";
import { Button } from "src/components/common";
import { Checkbox } from "src/components/common";
import { useSchedule } from "src/hooks/schedule";
import { APPLICATION_PERIOD } from "src/data/modules/redux/reducer/schedule/scheduleConstance";
import { downloadExcel } from "src/utils/download";
import {
  downloadApplicantsListExcel,
  downloadAdmissionExcel,
} from "src/data/api/excel/excelApi";
import { GetApplicantsListPayload } from "src/data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  isContainerWidth: boolean;
  isDeleteTableModalSwitch: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const Filter: FC<Props> = ({
  filters,
  isContainerWidth,
  isDeleteTableModalSwitch,
  setFilter,
  getApplicantsList,
  setIsDeleteTableModalSwitch,
}) => {
  const checkLists = [
    { content: "대전", value: "isDaejeon" },
    { content: "전국", value: "isNationwide" },
    { content: "최종 제출 완료", value: "isSubmitted" },
    { content: "최종 제출 미완료", value: "isNotSubmitted" },
    { content: "일반 전형", value: "isCommon" },
    { content: "마이스터 전형", value: "isMeister" },
    { content: "사회통합 전형", value: "isSocial" },
    { content: "정원 내", value: "inOfHeadcount" },
    { content: "정원 외", value: "outOfHeadcount" },
  ];
  const { state } = useSchedule();

  React.useEffect(() => {
    getApplicantsList(filters);
  }, [filters]);

  const handleChangeFilter = async (value: string) => {
    let newFilter = { page: 0 };

    if (value === "isDaejeon" && !filters[value] && filters["isNationwide"]) {
      newFilter["isDaejeon"] = true;
      newFilter["isNationwide"] = false;
    } else if (
      value === "isNationwide" &&
      !filters[value] &&
      filters["isDaejeon"]
    ) {
      newFilter["isNationwide"] = true;
      newFilter["isDaejeon"] = false;
    } else if (
      value === "isSubmitted" &&
      !filters[value] &&
      filters["isNotSubmitted"]
    ) {
      newFilter["isSubmitted"] = true;
      newFilter["isNotSubmitted"] = false;
    } else if (
      value === "isNotSubmitted" &&
      !filters[value] &&
      filters["isSubmitted"]
    ) {
      newFilter["isNotSubmitted"] = true;
      newFilter["isSubmitted"] = false;
    } else if (
      value === "inOfHeadcount" &&
      !filters[value] &&
      filters["outOfHeadcount"]
    ) {
      newFilter["inOfHeadcount"] = true;
      newFilter["outOfHeadcount"] = false;
    } else if (
      value === "outOfHeadcount" &&
      !filters[value] &&
      filters["inOfHeadcount"]
    ) {
      newFilter["outOfHeadcount"] = true;
      newFilter["inOfHeadcount"] = false;
    } else {
      newFilter[value] = !filters[value] || false;
    }

    await setFilter(newFilter);
    getApplicantsList(filters);
  };

  const checkIsChecked = React.useCallback(
    (value: string) => {
      if (value === "isSubmitted" && "isNotSubmitted" && filters[value]) {
        return true;
      } else {
        return filters[value];
      }
    },
    [filters]
  );

  const handleDownloadExcel = React.useCallback(async () => {
    await downloadExcel(downloadApplicantsListExcel, "지원자목록");
  }, []);

  const handleDownloadAdmission = React.useCallback(async () => {
    if (state.status === APPLICATION_PERIOD) {
      alert("원서 접수기간이 끝나지 않았습니다.");
    }
    await downloadExcel(downloadAdmissionExcel, "수험표");
  }, []);

  const handleDeleteApplicants = React.useCallback(() => {
    setIsDeleteTableModalSwitch(!isDeleteTableModalSwitch);
  }, []);

  return (
    <S.FilterWrapper isContainerWidth={isContainerWidth}>
      <S.FilterSelectBox isContainerWidth={isContainerWidth}>
        {checkLists.map((item) => (
          <S.FilterItemContainer
            key={item.value}
            onClick={() => handleChangeFilter(item.value)}
          >
            <Checkbox isChecked={checkIsChecked(item.value)} />
            <p>{item.content}</p>
          </S.FilterItemContainer>
        ))}
      </S.FilterSelectBox>
      <S.FilterButtonContainer isContainerWidth={isContainerWidth}>
        <Button
          className="applicant-list__excel-btn"
          onClick={handleDownloadExcel}
        >
          Excel 출력
        </Button>
        <Button
          className="admission-ticket__download-btn"
          onClick={() => handleDownloadAdmission()}
        >
          수험표 출력
        </Button>
        <Button className="delete-all__btn" onClick={handleDeleteApplicants}>
          전체 삭제
        </Button>
      </S.FilterButtonContainer>
    </S.FilterWrapper>
  );
};

export default Filter;
