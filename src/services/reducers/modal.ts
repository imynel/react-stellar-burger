import { MODAL_OPEN, MODAL_CLOSE, TModalActions } from "../actions/modal";

type state = {
    modalType: null | string;
    modalProps: any;
}

const initialState: state = {
  modalType: null,
  modalProps: {}
}
  
export const modalReducer = (store = initialState, action: TModalActions) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case MODAL_CLOSE:
            return initialState
        default:
            return store
    }
}