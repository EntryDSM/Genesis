import React, { Dispatch, FC, SetStateAction } from "react";
import * as S from "./style";
import { error } from "../../models/error";
import ApplicantInfo from "./applicantInfo";
import ApplicantsList from "./applicantsList";
import FilterSearch from "./filterSearch";
import Pagination from "./pagination/Pagination";
import DeleteTable from "./deleteTable";
import {
  GetApplicantsListResponse,
  GetApplicantsListPayload,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
  UpdateApplicantPaidStatusPayload,
  UpdateApplicantSubmitStatusPayload,
  CheckPasswordRequest,
} from "src/data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  password: string;
  error: error;
  disable: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantPaidStatus: (
    payload: UpdateApplicantPaidStatusPayload
  ) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  setPassword: Dispatch<SetStateAction<string>>;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
}

const Applicant: FC<Props> = ({
  filters,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  password,
  error,
  disable,
  setFilter,
  updateApplicantStatus,
  updateApplicantPaidStatus,
  updateApplicantSubmitStatus,
  getApplicantsList,
  getApplicantInfo,
  setPassword,
  checkPassword,
  deleteApplicantTable,
}) => {
  const [isContainerWidth, setIsContainerWidth] =
    React.useState<boolean>(false);
  const [checkModalOn, setCheckModalOn] = React.useState<boolean>(false);
  const [isDeleteTableModalSwitch, setIsDeleteTableModalSwitch] =
    React.useState<boolean>(false);

  const checkModal = () => {
    if (isContainerWidth) {
      setCheckModalOn(!checkModalOn);
    }
    setCheckModalOn(false);
  };

  return (
    <>
      {isDeleteTableModalSwitch && (
        <DeleteTable
          password={password}
          applicantsList={applicantsList}
          error={error}
          disable={disable}
          setPassword={setPassword}
          checkPassword={checkPassword}
          deleteApplicantTable={deleteApplicantTable}
          setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
        />
      )}
      <S.Applicant isContainerWidth={isContainerWidth}>
        <S.ApplicantContainer isContainerWidth={isContainerWidth}>
          <FilterSearch
            filters={filters}
            isContainerWidth={isContainerWidth}
            isDeleteTableModalSwitch={isDeleteTableModalSwitch}
            setFilter={setFilter}
            getApplicantsList={getApplicantsList}
            setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
          />
          <ApplicantsList
            isContainerWidth={isContainerWidth}
            applicantsList={applicantsList}
            currnetApplicantInfo={currnetApplicantInfo}
            setIsContainerWidth={setIsContainerWidth}
            getApplicantInfo={getApplicantInfo}
          />
          <S.PaginationBox>
            <Pagination
              applicantsList={applicantsList}
              filters={filters}
              getApplicantsList={getApplicantsList}
              setFilter={setFilter}
            />
          </S.PaginationBox>
        </S.ApplicantContainer>
        <S.ApplicantInfoWrap isContainerWidth={isContainerWidth}>
          {checkModal && (
            <ApplicantInfo
              isContainerWidth={isContainerWidth}
              applicantsList={applicantsList}
              currnetApplicantInfo={currnetApplicantInfo}
              updateApplicantStatusStatus={updateApplicantStatusStatus}
              updateApplicantStatus={updateApplicantStatus}
              updateApplicantPaidStatus={updateApplicantPaidStatus}
              updateApplicantSubmitStatus={updateApplicantSubmitStatus}
              setIsContainerWidth={setIsContainerWidth}
            />
          )}
        </S.ApplicantInfoWrap>
      </S.Applicant>
    </>
  );
};

export default Applicant;
