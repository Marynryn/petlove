
import { AppBar, Toolbar, IconButton, Box } from '@mui/material'

import Logo from 'components/Logo/Logo'
import sprite from '../../img/svg/symbol-defs.svg'
import React, { useState } from 'react'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import { IsLoggedIn } from 'helpers/isLoggedIn'
import UserBar from 'components/UserBar/UserBar'
import theme from 'components/Theme'
import { AuthNav } from 'components/AuthNav/AuthNav'
import LogOutBtn from 'components/LogOutBtn/LogOutBtn'
import { useLocation } from 'react-router-dom'
import AppNav from 'components/AppNav/AppNav'


export const Header = ({ backgroundColor, iconColor }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { isLogIn } = IsLoggedIn();
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    const location = useLocation();
    const home = location.pathname === "/"
    return (
        <>
            <AppBar position="static" color="inherit" sx={{
                m: 0, boxShadow: "none", backgroundColor: { backgroundColor }, [theme.breakpoints.up("lg")]: {
                    px: "32px"

                },
            }}>
                <Toolbar variant="dense" sx={{
                    justifyContent: "space-between",
                    paddingY: 0, paddingX: 0, minHeight: "32px", '&.MuiToolbar-dense': {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }}>

                    <Logo />
                    <Box sx={{ display: "flex", }}>
                        <Box sx={{
                            display: "none",
                            [theme.breakpoints.up("lg")]: {
                                display: "flex",
                                mr: "142px"
                            },
                        }}><AppNav /></Box>
                        {isLogIn ? (<><Box sx={{
                            display: "flex", gap: "10px", [theme.breakpoints.up("md")]: {

                                maxWidth: "296px"
                            },
                        }}><Box sx={{
                            display: "none",
                            [theme.breakpoints.up("md")]: {
                                display: home ? "none" : "block",
                                width: "136px"
                            },

                        }}><LogOutBtn props={true} /></Box><Box sx={{
                            display: "flex",
                            mr: "16px",


                        }}
                        ><UserBar /></Box></Box></>) : <Box sx={{
                            display: "none",
                            [theme.breakpoints.up("md")]: {
                                display: "flex",
                                width: "296px"
                            },
                        }}> <AuthNav
                                flex={true}
                            /></Box>}
                        <IconButton edge="start" aria-label="menu" sx={{
                            p: 0, mr: 0, ml: "auto", [theme.breakpoints.up("lg")]: {
                                display: "none",

                            },
                        }} onClick={() => toggleModal()}>
                            <svg width={32} height={32} style={{ stroke: `${iconColor}` }}>
                                <use href={`${sprite}#icon-menu-hamburger`}></use>
                            </svg>
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar >
            <MobileMenu isOpen={modalOpen} onClose={setModalOpen} />


        </>
    )
}
export default Header;