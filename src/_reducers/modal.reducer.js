import { COMMON } from '../_constants/common.constant';

const initialState = {
    modalIsOpen: false,
    isRemoveConfirmationModalOpen: false,
    currentEditData: null
}

export function modal(state = initialState, action) {
    switch (action.type) {
        case COMMON.SET:
            return {
                ...state,
                [action.attr]: action[action.attr]
            };
        case COMMON.OPEN_EDIT_MODAL:
            return {
                ...state,
                ...{
                    currentEditData: action.currentEditData,
                    modalIsOpen: action.modalIsOpen,
                    type:action.type
                }
            };
        default:
            return state
    }
}