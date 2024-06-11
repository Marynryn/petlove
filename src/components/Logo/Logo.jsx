import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import { Link, useLocation } from 'react-router-dom/dist';
import css from "./Logo.module.css"


export const Logo = ({ loader }) => {
    const location = useLocation();
    const iconName = () => {
        return location.pathname === '/' ? 'icon-logo-1' : loader === true ? 'icon-logo-2' : 'icon-logo';
    };
    console.log(iconName())
    return (
        <Link to="/">
            <svg className={loader ? css.loaderLogo : css.logo}>
                <use href={`${sprite}#${iconName()}`} style={{ color: loader && " var(--background-color)" }} ></use>
            </svg>
        </Link>
    )
}
export default Logo;