import { Typography } from '@mui/material';
import Btn from 'components/Button/Button';
import React from 'react'
import { NavLink } from 'react-router-dom';
import sprite from '../../img/svg/symbol-defs.svg';
export const AddPet = () => {
    return (
        <div><NavLink to="/add-pet" style={{ textDecoration: 'none' }}>
            <Btn bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"} type="submit" ><Typography sx={{
                fontSize: "14px",
                fontWeight: 500, pl: "16px", mr: "4px"
            }}>Add pet</Typography>
                <svg width={18} height={18} style={{ paddingRight: "8px", }}>
                    <use href={`${sprite}#icon-plus`} style={{ stroke: "var(--background-color)" }} ></use>
                </svg></Btn>
        </NavLink></div>
    )
}
export default AddPet;