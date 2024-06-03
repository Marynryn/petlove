import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from 'store/selectors';
import { Box, Typography, Avatar, } from '@mui/material';

const UserBar = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (
        <Box display="flex" alignItems="center">
            <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>

                <Avatar

                    src={user.avatar}
                    alt={user.name}
                    sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Typography variant="h6" color="textPrimary">
                    {user.name}
                </Typography>
            </Link>
        </Box>
    );
};

export default UserBar;

