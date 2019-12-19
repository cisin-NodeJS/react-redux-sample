import { http } from '../_helpers/request.helper';
import Cookies from 'universal-cookie';

export default function UserService() {

    /**
     * To set cookies
     * maxAge (number): relative max age of the cookie from when the client receives it in second,
     * path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages,
     * secure (boolean): Is only accessible through HTTPS?
     */
    let setCookie = (key, value) => {
        const cookies = new Cookies();
        cookies.set(key, value, {
            path: '/',
            secure: false,
            maxAge: 86400
        });
        // console.log(`token set successfully :${key}`, cookies.get(key)); // Pacman
    }


    this.login = ({ email, password }) => {
        return new Promise((resolve, reject) => {
            http.get(`/user?email=${email}&password=${password}`).then((res) => {
                const { data } = res;
                if (data.length) {
                    setCookie('login', true);
                    data && data[0] && setCookie('user', data[0]);
                }
                resolve(res);
            }).catch(err => reject(err));
        })
    }

    this.register = ({ reg_email }) => {
        return http.post('/auth/register/verify', { email: reg_email }).then((res) => {
            const { data } = res;
            if (data.payload) {

            }
            return res;
        }).catch(err => {
            console.log('err: >>>>>>>>>>>>>>', err);
            throw err;
        })
    }


    return this;
};