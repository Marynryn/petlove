
import EditUserBtn from 'components/EditUserBtn/EditUserBtn';
import LogOutBtn from 'components/LogOutBtn/LogOutBtn';
import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import { Box, Typography } from '@mui/material';
import UserBlock from 'components/UserBlock/UserBlock';
import PetsBlock from 'components/PetsBlock/PetsBlock';
import theme from 'components/Theme';
export const UserCard = ({ props }) => {

    const boxStyle = {

        borderRadius: "30px",
        backgroundColor: "var(--background-color)",
        p: "18px 20px 40px 20px",
        mt: "18px",
        mb: "40px", [theme.breakpoints.up("md")]: {
            p: "40px"
        }, [theme.breakpoints.up('lg')]: {
            width: "440px", mt: 0,
            minHeight: "770px"
        },
    }
    return (
        <Box sx={boxStyle}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ p: "10px 14px", display: "flex", alignItems: "center", backgroundColor: "var(--secondary-color)", borderRadius: "30px", height: " 18px", width: "52px" }}>
                    <Typography sx={{ mr: "4px", p: 0, fontSize: "14px", fontWeight: 500, color: "var(--background-color)" }}>User</Typography>

                    <svg width={16} height={16}>
                        <use href={`${sprite}#icon-Vector-2`} style={{ fill: "var(--background-color)" }} ></use>
                    </svg>
                </Box>
                <EditUserBtn />
            </Box>
            <UserBlock props={props} />
            <PetsBlock />
            <Box width="114px" sx={{ mt: "20px" }}><LogOutBtn /></Box>

        </Box>
    )
}
export default UserCard;