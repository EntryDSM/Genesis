import { useDispatch, useSelector } from "react-redux";
import {
  changeModalStatus,
  SelectedModal,
} from "src/data/modules/redux/action/modal";
import { useSelectState } from "./default";

const useModal = () => {
  const dispatch = useDispatch();
  const onChangeModal = (selected: SelectedModal, receiptCode: number) => {
    dispatch(
      changeModalStatus({
        selectedModal: selected,
        selectedReceiptCode: receiptCode,
      })
    );
  };
  const { selectedModal } = useSelectState().modal;
  return {
    onChangeModal,
    selectedModal,
  };
};
export default useModal;
