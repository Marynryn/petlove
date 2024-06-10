import { Box, Typography } from '@mui/material';
import Header from 'components/Header/Header';
import React from 'react'
import css from "./Home.module.css"
import theme from 'components/Theme';


export const Home = () => {


    return (
        <Box sx={{
            my: "-10px", [theme.breakpoints.up('md')]: {
                my: '-4px',
            }, [theme.breakpoints.up('lg')]: {
                my: "-16px"
            },
        }}>
            <Box sx={{
                bgcolor: " var(--secondary-color)", color: "var( --background-color)", p: "10px 20px 50px 20px ", borderRadius: "30px", [theme.breakpoints.up('md')]: {
                    p: '16px 32px 44px 32px', borderRadius: '60px'
                }, [theme.breakpoints.up('lg')]: {
                    pb: "32px",
                },
            }}>
                <Header iconColor={"var( --background-color)"} backgroundColor={" var(--secondary-color)"} />
                <Box sx={{
                    [theme.breakpoints.up('lg')]: {
                        display: "flex", gap: "73px"
                    },
                }}>
                    <Typography sx={{
                        mt: "60px", mb: "24px", fontWeight: 700, fontSize: "50px", [theme.breakpoints.up('md')]: {
                            fontSize: "80px", lineHeight: 0.5, letterSpacing: "-2.4px", mt: "92px"
                        }, [theme.breakpoints.up('lg')]: {
                            width: "760px"
                        },
                    }}>
                        Take good <Typography component="span" sx={{
                            opacity: 0.4, m: 0, fontWeight: 700, fontSize: "50px", letterSpacing: "-1.5px", [theme.breakpoints.up('md')]: {
                                fontSize: "80px"
                            }
                        }}>care</Typography>  of your small pets
                    </Typography>
                    <Typography component="span" sx={{
                        fontWeight: 500, fontSize: "14px", letterSpacing: "-0.28px", lineHeight: "18px", [theme.breakpoints.up('md')]: {
                            width: '255px', mt: "48px", fontWeight: 400, display: "flex", mr: 0, ml: "auto", fontSize: "18px", lineHeight: "22px"
                        }, [theme.breakpoints.up('lg')]: {
                            mt: "198px"
                        },
                    }}>
                        Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.
                    </Typography></Box>
            </Box>

            <Box className={css.image} />


        </Box >
    )
}
export default Home;