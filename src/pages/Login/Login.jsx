
import { Box, Button, Typography } from '@mui/material';
import PetBlock from 'components/PetBlock/PetBlock';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Title from 'components/Title/Title';
import React from 'react'
import { NavLink } from 'react-router-dom/dist';

export const Login = () => {
    const style = {
        p: "55px 20px",
        backgroundColor: "var(--background-color)",
        borderRadius: "30px",
        textContent: "center",
        minHeight: "368px",
        my: "auto",
    }
    return (
        <div>
            <PetBlock />
            <Box sx={style}>
                <Title>Login</Title>
                <Typography sx={{ mt: "12px", mb: "20px", fontSize: "14px", lineHeight: 1.28, fontWeight: 500, letterSpacing: "-0.28px" }}>
                    Welcome! Please enter your credentials to login to the platform:
                </Typography>
                <RegistrationForm type={"login"} />
                <Typography sx={{ fontSize: "12px", display: 'flex', alignItems: "center", justifyContent: "center", height: "14px", fontWeight: 500, textAlign: "center", mt: "12px" }}>Don’t have an account? <NavLink to="/register">
                    <Button sx={{ color: "var(--secondary-color)", p: 0, minWidth: "15px", textTransform: 'capitalize', fontSize: "12px", height: "14px", fontWeight: 700, }}> Register</Button></NavLink>
                </Typography>

            </Box>

        </div>
    )
}
export default Login;