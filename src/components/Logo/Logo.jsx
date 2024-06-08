import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import { useLocation } from 'react-router-dom/dist';
import css from "./Logo.module.css"


export const Logo = ({ width, height }) => {
    const location = useLocation();

    const iconName = location.pathname === '/' ? 'icon-logo-1' : 'icon-logo';
    return (

        <svg className={css.logo}>
            <use href={`${sprite}#${iconName}`}  ></use>
        </svg>

    )
}
export default Logo;