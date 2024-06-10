
import { Box } from '@mui/material';
import MyNotices from 'components/MyNotices/MyNotices';
import theme from 'components/Theme';
import UserCard from 'components/UserCard/UserCard';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentUserFull } from 'store/operations';
import { selectUser } from 'store/selectors';


export const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    useEffect(() => {
        dispatch(currentUserFull());
    }, [dispatch])

    return (
        <Box sx={{
            [theme.breakpoints.up('lg')]: {
                display: "flex", gap: "32px", mt: "32px"
            },
        }}>


            <UserCard props={user} />


            <MyNotices />
        </Box>
    )
}
export default Profile;