import ScheduleModifySelectIcon from "../../../assets/schedule/schedule_modify_select_off";
import * as S from "../style";
import React, { useState } from "react";
import { DateObjectType } from "./ScheduleDateBody";

interface Props {
  selectedValue: string;
  type: DateObjectType;
  onClickDropdownValue: (type: DateObjectType, value: string) => void;
  itemCount: number;
}

const SelectDropdown: React.FC<Props> = ({
  selectedValue,
  onClickDropdownValue,
  itemCount,
  type,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const onChangeDropdownStatus = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div>
      <S.SelectBox onClick={onChangeDropdownStatus}>
        {selectedValue}
        <ScheduleModifySelectIcon isOpen={isOpened} />
      </S.SelectBox>
      {isOpened && (
        <S.ItemWrapper>
          {Array(itemCount)
            .fill(void 0)
            .map((_, index) => {
              const value = type === "second" || type === "minute" ? index : index + 1;
              return(
              <S.Item
                onClick={() => {
                  onClickDropdownValue(type, String(value));
                  setIsOpened(!isOpened);
                }}
              >
                {value}
              </S.Item>
            )})}
        </S.ItemWrapper>
      )}
    </div>
  );
};
export default SelectDropdown;
