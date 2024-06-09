import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/selectors';
import { Box, Typography, Avatar, } from '@mui/material';
import theme from 'components/Theme';

const UserBar = () => {
    const user = useSelector(selectUser);
    const location = useLocation()
    const homepage = location.pathname === "/"
    const defaultBgColor = "#FFF4DF";
    const defaultColor = 'var(--secondary-color)';

    return (
        <Box display="flex" alignItems="center">
            <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>

                <Avatar
                    src={user.avatar || undefined}
                    alt={user.name}
                    sx={{
                        width: "40px",
                        height: "40px",
                        mr: 2,
                        bgcolor: user.avatar ? 'transparent' : defaultBgColor,
                        color: user.avatar ? 'inherit' : defaultColor,
                        fontSize: user.avatar ? 'inherit' : 20,
                        [theme.breakpoints.up("md")]: {
                            width: "50px",
                            height: "50px",
                        },
                    }}
                >

                </Avatar>
                <Typography variant="h6" color="textPrimary" sx={{
                    display: "flex", fontWeight: 700, textTransform: "capitalize",
                    color: homepage ? "#fff" : "var(--primary-color)",
                    [theme.breakpoints.down("md")]: {
                        display: "none",
                    },
                    [theme.breakpoints.up("md")]: {
                        fontSize: "20px"
                        // display: "none",
                    }
                }}>
                    {user.name}
                </Typography>
            </Link>
        </Box>
    );
};

export default UserBar;

