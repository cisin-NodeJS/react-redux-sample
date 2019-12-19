import { PRODUCTS } from "../_constants/products.constant";

const initialState = {
    data: [],
    toggleModal: null,
    confirmRemove: null
}

export function products(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS.GET_ALL:
            return state.data;
        case PRODUCTS.SET_ALL:
            return {
                ...state,
                data: action.data
            };
        case PRODUCTS.SET:
            return {
                ...state,
                [action.attr]: action[action.attr]
            };
        default:
            return state
    }
}