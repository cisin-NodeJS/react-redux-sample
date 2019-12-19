import { USER } from '../_constants/user.constant';
import Cookies from 'universal-cookie'

const initialState = {
    loggedIn: !!(new Cookies()).get('login'),
    user: {},
    token: null
}

export function users(state = initialState, action) {
    switch (action.type) {
        case USER.GETALL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER.GETALL_SUCCESS:
            return {
                ...state,
                items: action.users
            };
        case USER.GETALL_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case USER.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            };

        default:
            return state
    }
}