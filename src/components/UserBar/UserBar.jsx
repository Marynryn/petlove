import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/selectors';
import { Box, Typography, Avatar, } from '@mui/material';

const UserBar = () => {
    const user = useSelector(selectUser);


    const defaultBgColor = "#FFF4DF";
    const defaultColor = 'var(--secondary-color)';

    return (
        <Box display="flex" alignItems="center">
            <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>

                <Avatar
                    src={user.avatar || undefined}
                    alt={user.name}
                    sx={{
                        width: 40,
                        height: 40,
                        mr: 2,
                        bgcolor: user.avatar ? 'transparent' : defaultBgColor,
                        color: user.avatar ? 'inherit' : defaultColor,
                        fontSize: user.avatar ? 'inherit' : 20,
                    }}
                >

                </Avatar>
                <Typography variant="h6" color="textPrimary" sx={(theme) => ({
                    display: "flex",

                    [theme.breakpoints.down("md")]: {
                        display: "none",
                    },
                    [theme.breakpoints.down("lg")]: {

                        // display: "none",
                    }
                })}>
                    {user.name}
                </Typography>
            </Link>
        </Box>
    );
};

export default UserBar;

