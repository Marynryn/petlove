import { Box, Button, Typography } from '@mui/material';
import PetBlock from 'components/PetBlock/PetBlock';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import theme from 'components/Theme';
import Title from 'components/Title/Title';
import React from 'react'
import { NavLink } from 'react-router-dom/dist';

export const Registration = () => {
    const style = {
        p: "20px",
        backgroundColor: "var(--background-color)",
        borderRadius: "30px",
        textContent: "center",
        minHeight: "368px",
        [theme.breakpoints.up("md")]: {
            p: "27px 140px"
        },


    }
    return (
        <Box sx={{
            [theme.breakpoints.up("md")]: {

            },

        }}>
            <PetBlock />
            <Box sx={style}>
                <Box sx={{
                    [theme.breakpoints.up("md")]: {
                        width: "424px",
                        textContent: "center",
                        height: "506px"
                    },
                }}>
                    <Title>Registration</Title>
                    <Typography sx={{
                        mt: "12px", mb: "20px", fontSize: "14px", lineHeight: 1.28, fontWeight: 500, letterSpacing: "-0.28px", [theme.breakpoints.up("md")]: {
                            mt: "16px", mb: "32px", fontSize: "18px"
                        },
                    }}>
                        Thank you for your interest in our platform.
                    </Typography>
                    <RegistrationForm type={"register"} />
                    <Typography sx={{
                        fontSize: "12px", display: 'flex', alignItems: "center", justifyContent: "center", height: "14px", fontWeight: 500, textAlign: "center", mt: "12px", [theme.breakpoints.up("md")]: {
                            mt: "16px"
                        },
                    }}>Already have an account?<NavLink to="/login">
                            <Button sx={{ color: "var(--secondary-color)", p: 0, minWidth: "15px", textTransform: 'capitalize', fontSize: "12px", height: "14px", fontWeight: 700, }}>Login</Button></NavLink>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}
export default Registration;