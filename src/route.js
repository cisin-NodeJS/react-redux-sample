import React from 'react';
import DefaultLayout from './layouts/DefaultLayout/default.layout';
import GuestLayout from './layouts/GuestLayout/guest.layout';

export const routes = [
    { path: '/home', exact: true, component: React.lazy(() => import('./pages/Home')), name: 'Home', middleware: DefaultLayout },
    { path: '/account/verify', exact: true, component: React.lazy(() => import('./pages/AccountVerification')), name: 'AccountVerification', middleware: GuestLayout },
    { path: '/', component: React.lazy(() => import('./pages/GuestHome')), name: 'Login', middleware: GuestLayout }
]