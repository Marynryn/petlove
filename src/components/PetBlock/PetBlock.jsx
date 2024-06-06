import React from 'react'
import css from "./PetBlock.module.css"
import { useLocation } from 'react-router-dom/dist';
export const PetBlock = () => {

    const location = useLocation();

    const style = () => {
        if (location.pathname === '/register') return css.catblock;
        if (location.pathname === '/login') return css.dogblock;
        if (location.pathname === '/add-pet') return css.another_dog_block;
        return null;
    }



    return (
        <div className={style()}></div>
    )
}
export default PetBlock;