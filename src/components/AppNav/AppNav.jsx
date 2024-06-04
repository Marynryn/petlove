
import { Navigation } from '../Navigation/Navigation';

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

            </Box >
        </>
    )
}

export default AppNav;