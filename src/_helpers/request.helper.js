import { create } from 'axios';
import config from '../config';
const { headers } = config;

export const http = (function () {
    let http = create({
        headers,
    });

    return http;
})()
