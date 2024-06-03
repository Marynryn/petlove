import LogOutBtn from 'components/LogOutBtn/LogOutBtn';
import UserBar from 'components/UserBar/UserBar';
import React from 'react'

export const UserMenu = () => {
    return (
        <div>
            <UserBar />
            <LogOutBtn />
        </div>
    )
}
export default UserMenu;
