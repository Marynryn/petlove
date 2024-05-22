import { Box, Typography } from '@mui/material';
import Header from 'components/Header/Header';
import React from 'react'
import css from "./Home.module.css"
export const Home = () => {
    return (
        <Box sx={{ my: "-10px", }}>
            <Box sx={{ bgcolor: " var(--secondary-color)", color: "var( --background-color)", p: "10px 20px 50px 20px ", borderRadius: "30px" }}>
                <Header iconColor={"var( --background-color)"} backgroundColor={" var(--secondary-color)"} />
                <Typography component="h1" sx={{ mt: "60px", mb: "24px", fontWeight: 700, fontStyle: "normal", fontSize: "50px", letterSpacing: "-3%", lineHeight: "30px" }}>
                    Take good <Typography component="span" sx={{ opacity: 0.4, fontWeight: 700, fontSize: "50px", letterSpacing: "-1.5px" }}>care</Typography>  of your small pets
                </Typography>
                <Typography component="span" sx={{ fontWeight: 500, fontSize: "14px", letterSpacing: "-0.28px", lineHeight: "18px" }}>
                    Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.
                </Typography>
            </Box>

            <Box className={css.image} />


        </Box >
    )
}
export default Home;