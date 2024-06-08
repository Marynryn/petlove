
import { AppBar, Toolbar, IconButton, Box } from '@mui/material'

import Logo from 'components/Logo/Logo'
import sprite from '../../img/svg/symbol-defs.svg'
import React, { useState } from 'react'

import MobileMenu from 'components/MobileMenu/MobileMenu'
import { IsLoggedIn } from 'helpers/isLoggedIn'
// import UserMenu from 'components/UserMenu/UserMenu'
import UserBar from 'components/UserBar/UserBar'
import theme from 'components/Theme'
import { AuthNav } from 'components/AuthNav/AuthNav'
// import { AuthNav } from 'components/AuthNav/AuthNav'

export const Header = ({ backgroundColor, iconColor }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { isLogIn } = IsLoggedIn();
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <>
            <AppBar position="static" color="inherit" sx={{ m: 0, boxShadow: "none", backgroundColor: { backgroundColor } }}>
                <Toolbar variant="dense" sx={{
                    justifyContent: "space-between",
                    paddingY: 0, paddingX: 0, minHeight: "32px", '&.MuiToolbar-dense': {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }}>

                    <Logo />
                    <Box sx={{ display: "flex", }}>
                        {isLogIn ? (<Box sx={(theme) => ({
                            display: "flex",
                            mr: "16px",
                            [theme.breakpoints.down("md")]: {
                                // display: "none",
                            },
                            [theme.breakpoints.down("lg")]: {

                                // display: "none",
                            }
                        })}
                        ><UserBar /></Box>) : <Box sx={{
                            display: "none",
                            [theme.breakpoints.up("md")]: {
                                display: "flex",
                                width: "296px"
                            },
                        }}> <AuthNav

                            /></Box>}
                        <IconButton edge="start" aria-label="menu" sx={{ p: 0, mr: 0, ml: "auto" }} onClick={() => toggleModal()}>
                            <svg width={32} height={32} style={{ stroke: `${iconColor}` }}>
                                <use href={`${sprite}#icon-menu-hamburger`}></use>
                            </svg>
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            <MobileMenu isOpen={modalOpen} onClose={setModalOpen} />


        </>
    )
}
export default Header;