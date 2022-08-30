import { createAction } from "typesafe-actions";

export type SelectedModal = "APPLICATION_ARRIVED" | "CANCLE_FINAL_SUBMIT" | "";

export const CHANGE_MODAL_STATUS = "CHANGE_MODAL_STATUS";
export const changeModalStatus = createAction(CHANGE_MODAL_STATUS)<{
  selectedModal: SelectedModal;
  selectedReceiptCode?: number;
}>();
export type ModalActionType = ReturnType<typeof changeModalStatus>;
