import React, { FC } from "react";
import * as S from "./style";
import { GetApplicantsListPayload } from "src/data/api/apiTypes";

interface Props {
    applicantCount : number
  isContainerWidth: boolean;
  searchProgressImg: string;
  searchIcon: string;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const categoryList = [
  { content: "학교이름", id: "schoolName" },
  { content: "이름", id: "name" },
  { content: "접수번호", id: "receiptCode" },
];

const SearchBar: FC<Props> = ({
                                  applicantCount,
  isContainerWidth,
  searchProgressImg,
  searchIcon,
  setFilter,
}) => {

  const [keyword, setKeyword] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(
    categoryList[0]
  );
  const [isOpened, setIsOpened] = React.useState(false);

  const handleClickDropdown = React.useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const handleSelectItem = React.useCallback(
    (category: { content; id }) => {
      setFilter({
        [selectedCategory.id]: null,
        [category.id]: keyword,
      });
      setSelectedCategory(category);
    },
    [selectedCategory, keyword]
  );

  const handleChangeKeyword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
      setFilter({
        [selectedCategory.id]: e.currentTarget.value || null,
      });
    },
    [selectedCategory, keyword]
  );

  return (
    <S.SearchBarWrapper>
      {isOpened ? (
        <S.CategoryDropdownOpened onClick={handleClickDropdown}>
          <li>
            {selectedCategory.content}
            <img src={searchProgressImg} alt="details arrow" />
          </li>
          {categoryList.map((content) => (
            <li key={content.id} onClick={() => handleSelectItem(content)}>
              {content.content}
            </li>
          ))}
        </S.CategoryDropdownOpened>
      ) : (
        <S.CategoryDropdownClosed onClick={handleClickDropdown}>
          {selectedCategory.content}
          <img src={searchProgressImg} alt="details arrow" />
        </S.CategoryDropdownClosed>
      )}
      <S.SearchInputContainer>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <img src={searchIcon} alt={"searchIcon"} />
      </S.SearchInputContainer>
      <S.TotalApplicantCount>
          검색 결과 :&nbsp;<p>{applicantCount}</p>명
      </S.TotalApplicantCount>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
