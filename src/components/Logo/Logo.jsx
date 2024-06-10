import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import { useLocation } from 'react-router-dom/dist';
import css from "./Logo.module.css"


export const Logo = ({ loader }) => {
    const location = useLocation();
    const iconName = () => {
        return location.pathname === '/' ? 'icon-logo-1' : loader === true ? 'icon-logo-2' : 'icon-logo';
    };
    return (

        <svg className={loader ? css.loaderLogo : css.logo}>
            <use href={`${sprite}#${iconName()}`} style={{ color: loader && " var(--background-color)" }} ></use>
        </svg>

    )
}
export default Logo;