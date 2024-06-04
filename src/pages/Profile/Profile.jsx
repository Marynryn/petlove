import MyNotices from 'components/MyNotices/MyNotices';
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
        <div>
            {/* <UserCard /> */}
            <MyNotices props={user} />
        </div>
    )
}
export default Profile;