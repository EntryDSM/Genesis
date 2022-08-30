import { ModalActionType, SelectedModal } from "../action/modal";

export interface ModalState {
  selectedModal: SelectedModal;
  selectedReceiptCode?: number;
}
const initialState: ModalState = {
  selectedModal: "",
  selectedReceiptCode: undefined,
};
const modalReducer = (
  state: ModalState = initialState,
  action: ModalActionType
) => {
  switch (action.type) {
    case "CHANGE_MODAL_STATUS": {
      return {
        ...state,
        selectedModal: action.payload.selectedModal,
        selectedReceiptCode: action.payload.selectedReceiptCode,
      };
    }
    default:
      return { ...state };
  }
};
export default modalReducer;
