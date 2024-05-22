import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Box } from '@mui/material';

export const AppNav = () => {


    return (
        <>
            <Box sx={(theme) => ({
                display: "block",

                [theme.breakpoints.down("md")]: {
                    // display: "none",
                },
                [theme.breakpoints.down("lg")]: {

                    // display: "none",
                }
            })}>

                <Navigation />
                {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            </Box >
        </>
    )
}

export default AppNav;