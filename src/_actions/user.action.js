import UserService from '../_services/user.service';
import { toast } from 'react-toastify';
import { USER } from '../_constants/user.constant.js';


const service = new UserService();
export {
    login,
    logout,
    register
}

function _alert(type, message) {
    switch (type) {
        case 'SUCCESS':
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
            });
            break;
        case "ERROR":
            toast.error(message, {
                position: toast.POSITION.TOP_LEFT
            });
            break;
        default:
            break;
    }

}

function login(email, password) {
    return dispatch => {
        return service.login({ email, password }).then(({ data }) => {
            if (data && data[0]) {
                _alert('SUCCESS', data.message || 'User logged-in successfully !');
                return dispatch({
                    type: USER.LOGIN_SUCCESS,
                    user: data[0],
                    // token: data.payload.token,
                    loggedIn: true
                })
            }
        }).catch(err => {
            const msg = err.response.data.message || err.message;
            _alert('ERROR', msg);
        })
    }
}

function logout() {
    return dispatch => {
        dispatch({
            type: USER.LOGIN_SUCCESS,
            user: {},
            token: null,
            loggedIn: false
        })
    }
}

function register(reg_email) {
    return dispatch => {
        try {
            return service.register({ reg_email }).then(({ data }) => {
                if (data && data.status) {
                    dispatch({
                        type: USER.LOGIN_SUCCESS,
                        user: data.payload.user,
                        token: data.payload.token,
                        loggedIn: true
                    });
                    _alert('SUCCESS', data.message || 'User registered successfully !');
                }
            })
        } catch (error) {
            console.log('try catch ----------------error: ', error);

        }
    }
}