import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import { useLocation } from 'react-router-dom/dist';


export const Logo = ({ width, height }) => {
    const location = useLocation();

    const iconName = location.pathname === '/' ? 'icon-logo-1' : 'icon-logo';
    return (
        <div className=''>
            <svg width={width} height={height}>
                <use href={`${sprite}#${iconName}`} style={{ minWidth: `${width}` }} ></use>
            </svg>
        </div>
    )
}
export default Logo;