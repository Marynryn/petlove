import { Box } from '@mui/material';
import LogOutBtn from 'components/LogOutBtn/LogOutBtn';
import UserBar from 'components/UserBar/UserBar';
import React from 'react'

export const UserMenu = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <UserBar />
            <LogOutBtn />
        </Box>
    )
}
export default UserMenu;
