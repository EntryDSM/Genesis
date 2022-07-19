import React, { FC } from "react";
import { list_progressbar, search_icon } from "src/assets/applicants";
import SearchBar from "./searchBar";
import Filter from "./filter";
import FilterSearchWrapper from "./style";
import { GetApplicantsListPayload } from "src/data/api/apiTypes";
import {useSelectState} from "../../../hooks/default";

interface Props {
  filters: GetApplicantsListPayload;
  isContainerWidth: boolean;
  isDeleteTableModalSwitch: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const FilterSearch: FC<Props> = ({
  filters,
  isContainerWidth,
  isDeleteTableModalSwitch,
  setFilter,
  getApplicantsList,
  setIsDeleteTableModalSwitch,
}) => {
    const applicant = useSelectState().applicant
  return (
    <FilterSearchWrapper isContainerWidth={isContainerWidth}>
      <SearchBar
          applicantCount={applicant.applicantsList.total_elements}
        isContainerWidth={isContainerWidth}
        searchProgressImg={list_progressbar}
        searchIcon={search_icon}
        setFilter={setFilter}
      />
      <Filter
        isContainerWidth={isContainerWidth}
        filters={filters}
        isDeleteTableModalSwitch={isDeleteTableModalSwitch}
        setFilter={setFilter}
        getApplicantsList={getApplicantsList}
        setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
      />
    </FilterSearchWrapper>
  );
};

export default FilterSearch;
