
import { Box, Button, Typography } from '@mui/material';
import PetBlock from 'components/PetBlock/PetBlock';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import theme from 'components/Theme';
import Title from 'components/Title/Title';
import React from 'react'
import { NavLink } from 'react-router-dom/dist';

export const Login = () => {
    const style = {
        p: "20px 20px",
        backgroundColor: "var(--background-color)",
        borderRadius: "30px",
        textContent: "center",
        minHeight: "368px",
        my: "auto",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        [theme.breakpoints.up("md")]: {
            p: "71px 140px",
            height: "418px",
            borderRadius: "60px"
        },
        [theme.breakpoints.up("lg")]: {
            p: "118px 84px",
            width: "424px"
        },

    }
    return (
        <Box sx={{
            [theme.breakpoints.up("lg")]: {
                display: "flex", gap: "32px",
                mt: "32px"
            },
        }}>
            <PetBlock />
            <Box sx={style}>
                <Title>Log in</Title>
                <Typography sx={{
                    mt: "12px", mb: "20px", fontSize: "14px", lineHeight: 1.28, fontWeight: 500, letterSpacing: "-0.28px", [theme.breakpoints.up("md")]: {
                        mt: "16px", mb: "32px", fontSize: "18px"
                    },
                }}>
                    Welcome! Please enter your credentials to login to the platform:
                </Typography>
                <RegistrationForm type={"login"} />
                <Typography sx={{ fontSize: "12px", display: 'flex', alignItems: "center", justifyContent: "center", height: "14px", fontWeight: 500, textAlign: "center", mt: "12px" }}>Don’t have an account? <NavLink to="/register">
                    <Button sx={{ color: "var(--secondary-color)", p: 0, minWidth: "15px", textTransform: 'capitalize', fontSize: "12px", height: "14px", fontWeight: 700, }}> Register</Button></NavLink>
                </Typography>

            </Box>

        </Box>
    )
}
export default Login;