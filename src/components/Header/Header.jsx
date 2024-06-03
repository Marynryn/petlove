
import { AppBar, Toolbar, IconButton } from '@mui/material'

import Logo from 'components/Logo/Logo'
import sprite from '../../img/svg/symbol-defs.svg'
import React, { useState } from 'react'

import MobileMenu from 'components/MobileMenu/MobileMenu'
import { IsLoggedIn } from 'helpers/isLoggedIn'
import UserMenu from 'components/UserMenu/UserMenu'
// import { AuthNav } from 'components/AuthNav/AuthNav'

export const Header = ({ backgroundColor, iconColor }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { isLogIn } = IsLoggedIn();
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <>
            <AppBar position="static" color="inherit" sx={{ boxShadow: "none", backgroundColor: { backgroundColor } }}>
                <Toolbar variant="dense" sx={{
                    paddingY: 0, paddingX: 0, minHeight: "32px", mt: "8px", '&.MuiToolbar-dense': {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }}>
                    <Logo width={76} height={20} />
                    {isLogIn && <UserMenu />}
                    <IconButton edge="start" aria-label="menu" sx={{ p: 0, mr: 0, ml: "auto" }} onClick={() => toggleModal()}>
                        <svg width={32} height={32} style={{ stroke: `${iconColor}` }}>
                            <use href={`${sprite}#icon-menu-hamburger`}></use>
                        </svg>
                    </IconButton>


                </Toolbar>
            </AppBar>
            <MobileMenu isOpen={modalOpen} onClose={setModalOpen} />


        </>
    )
}
export default Header;