import React from 'react'
import css from "./PetBlock.module.css"
import { useLocation } from 'react-router-dom/dist';
export const PetBlock = () => {

    const location = useLocation();

    const style = location.pathname === '/register' ? css.catblock : css.dogblock;

    return (
        <div className={style}></div>
    )
}
export default PetBlock;