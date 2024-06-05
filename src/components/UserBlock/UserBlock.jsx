import { Box, Typography } from '@mui/material';
import React from 'react'
import sprite from '../../img/svg/symbol-defs.svg'
import { useSelector } from 'react-redux';
import { selectUser } from 'store/selectors';

export const UserBlock = ({ props }) => {
    const user = useSelector(selectUser);

    const fieldStyle = {
        border: "1px solid #F6B83D",
        borderRadius: "30px",
        fontSize: "14px",
        fontWeight: 500,
        height: "42px",
        display: "flex",
        alignItems: "center",
        pl: "12px",
        mb: "10px"


    }

    return (
        <Box mb="30px">
            {(user.avatar === "") ? (<>
                <Box sx={{ width: "94px", height: "94px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", textAlign: 'center', mt: "20px", mb: "12px" }}>
                    <svg width={40} height={40} style={{ padding: "20px", }}>
                        <use href={`${sprite}#icon-Vector-2`} style={{ fill: "var(--secondary-color)" }} ></use>
                    </svg>
                </Box>
                <Typography sx={{ textDecoration: "underline", fontSize: "12px", fontWeight: 500, textAlign: 'center', mt: "8px", mb: "28px" }}> Upload photo</Typography></>
            ) : (
                <Box sx={{ width: "94px", height: "94px", mx: "auto", borderRadius: "100%", textAlign: 'center', mt: "20px", mb: "12px" }}>
                    <img src={user.avatar} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                </Box>
            )}

            <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: "20px" }}>My information</Typography>
            {props.name ?
                <Typography sx={fieldStyle}>{props.name}</Typography> : <Typography sx={{
                    border: "1px solid rgba(38, 38, 38, 0.15)",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    pl: "12px",
                    mb: "10px"
                }}>Name</Typography>}
            {props.email ?
                <Typography sx={fieldStyle}>{props.email}</Typography> : <Typography sx={{
                    border: "1px solid rgba(38, 38, 38, 0.15)",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    pl: "12px",
                    mb: "10px"
                }}>Email</Typography>}
            {props.phone ?
                <Typography sx={fieldStyle}>{props.phone} </Typography> :
                <Typography sx={{
                    border: "1px solid rgba(38, 38, 38, 0.15)",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    pl: "12px",
                    mb: "10px"
                }}>+3805 </Typography>
            }
        </Box >
    )
}
export default UserBlock;