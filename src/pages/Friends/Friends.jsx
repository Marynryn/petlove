import { Box } from '@mui/material';
import FriendsList from 'components/FriendsList/FriendsList';
import theme from 'components/Theme';

import Title from 'components/Title/Title';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from 'store/operations';
import { selectGetFriends } from 'store/selectors';

export const Friends = () => {
    const dispatch = useDispatch();

    const friends = useSelector(selectGetFriends);

    console.log(friends)
    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);


    return (
        <Box my="60px" sx={{
            [theme.breakpoints.up("md")]: {
                mt: "96px",
                mb: "48px"
            },
            [theme.breakpoints.up("lg")]: {
                mt: "107px",
                mb: "60px", px: "32px"
            }
        }}>
            <Title>Our friends</Title>
            <FriendsList friends={friends} />

        </Box>
    )
}
export default Friends;