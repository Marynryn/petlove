import { IsLoggedIn } from "../helpers/isLoggedIn";
import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogIn, isRefreshing } = IsLoggedIn();
    const shouldRedirect = !isLogIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};