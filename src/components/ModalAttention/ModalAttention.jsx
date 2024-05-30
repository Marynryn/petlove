import { Box, Typography } from '@mui/material';

import React from 'react'

import { AuthNav } from 'components/AuthNav/AuthNav';
export const ModalAttention = () => {


    return (
        <Box sx={{ pb: " 20px" }}>
            <Box sx={{ width: "80px", height: "80px", my: "20px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", textAlign: 'center' }}>
                <Typography sx={{ textAlign: "center", fontSize: "44px", fontWeight: 800, }}>🐶</Typography>
            </Box>
            <Typography sx={{ textAlign: "center", color: "var(--secondary-color)", mb: "20px", fontSize: "20px", fontWeight: 700, }}>Attention</Typography>
            <Typography sx={{ mb: "24px", fontSize: "14px", fontWeight: 500, textAlign: "center", lineHeight: 1.28, letterSpacing: "-0.28px" }}>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</Typography>
            <Box px="20px"> <AuthNav /></Box>

        </Box>
    )
}
export default ModalAttention;