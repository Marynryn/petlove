import React from 'react'
import css from "./PetBlock.module.css"
import { useLocation } from 'react-router-dom/dist';
import { Box, Typography } from '@mui/material';
import theme from 'components/Theme';
export const PetBlock = () => {

    const location = useLocation();

    const style = () => {
        if (location.pathname === '/register') return css.catblock;
        if (location.pathname === '/login') return css.dogblock;
        if (location.pathname === '/add-pet') return css.another_dog_block;
        return null;
    }



    return (
        <div className={style()}
        >{
                location.pathname === '/register' &&
                <Box sx={{
                    display: "none", backgroundColor: "var(--background-color)",
                    p: "16px 16px 16px 18px", textAlign: 'center', border: "1px solid rgba(38, 38, 38, 0.10)", borderRadius: "20px", width: "100%", [theme.breakpoints.up("md")]: {
                        display: "flex",
                        width: "262px",
                        height: "89px", gap: "8px", position: "absolute",
                        bottom: "32px",
                        left: "32px",
                        [theme.breakpoints.up("lg")]: {
                            bottom: "97px",
                            left: "61px"
                        },
                    }

                }}>  <Box sx={{ width: "60px", height: "60px", backgroundColor: "#FFF4DF", borderRadius: "100%" }}>
                        <Typography sx={{ px: "10px", py: "1px", textAlign: "center", fontSize: "32px", fontWeight: 800, }}>🐈</Typography>
                    </Box>
                    <Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: "8px" }}>
                            <Typography sx={{ color: "var(--secondary-color)", textAlign: "center", fontSize: "16px", fontWeight: 700, }}>Jack</Typography>
                            <Typography sx={{ textAlign: "center", fontSize: "12px", fontWeight: 500, }}><Typography component="span" sx={{ opacity: 0.5, fontSize: "12px", fontWeight: 500, }}>Birthday:</Typography> 18.10.2021</Typography></Box>
                        <Typography sx={{ fontSize: "11px", fontWeight: 500, lineHeight: "14px", textAlign: "left" }}>Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.</Typography></Box>
                </Box>
            }
            {
                location.pathname === '/login' &&
                <Box sx={{
                    display: "none", backgroundColor: "var(--background-color)",
                    p: "16px 16px 16px 18px", textAlign: 'center', border: "1px solid rgba(38, 38, 38, 0.10)", borderRadius: "20px", width: "100%", [theme.breakpoints.up("md")]: {
                        display: "flex",
                        width: "262px",
                        height: "89px", gap: "8px", position: "absolute",
                        bottom: "32px",
                        left: "32px",
                        [theme.breakpoints.up("lg")]: {
                            bottom: "97px",
                            left: "61px"
                        },
                    }

                }}>  <Box sx={{ width: "60px", height: "60px", backgroundColor: "#FFF4DF", borderRadius: "100%" }}>
                        <Typography sx={{ px: "10px", py: "1px", textAlign: "center", fontSize: "32px", fontWeight: 800, }}>🐶</Typography>
                    </Box>
                    <Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: "8px" }}>
                            <Typography sx={{ color: "var(--secondary-color)", textAlign: "center", fontSize: "16px", fontWeight: 700, }}>Rich</Typography>
                            <Typography sx={{ textAlign: "center", fontSize: "12px", fontWeight: 500, }}><Typography component="span" sx={{ opacity: 0.5, fontSize: "12px", fontWeight: 500, }}>Birthday:</Typography> 21.09.2020</Typography></Box>
                        <Typography sx={{ fontSize: "11px", fontWeight: 500, lineHeight: "14px", textAlign: "left" }}>Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!</Typography></Box>
                </Box>
            }
        </div >

    )
}
export default PetBlock;