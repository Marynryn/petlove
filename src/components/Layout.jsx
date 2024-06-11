import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom/dist';
import { Toaster } from 'react-hot-toast';
import theme from './Theme';


export const Layout = () => {
    const location = useLocation();
    const path = location.pathname;


    const shouldRenderHeader = path !== '/';
    const profile = path === "/profile"
    return (
        <>

            <Suspense fallback={<Loader />}>
                <Box sx={{
                    p: "20px ", [theme.breakpoints.up('md')]: {
                        p: '32px',
                    },

                }}
                >
                    {shouldRenderHeader && <Header backgroundColor={"inherit"} iconColor={"var(--primary-color)"} />}
                    <Box sx={{
                        mx: "auto",
                        [theme.breakpoints.up("sm")]: {
                            mx: "auto", width: "340px",
                        },
                        [theme.breakpoints.up("md")]: {
                            mx: "auto", width: "704px"
                        },
                        [theme.breakpoints.up("lg")]: {
                            mx: "auto", width: profile ? "1216px" : "1153px"
                        }
                    }}>
                        <Outlet /></Box>
                </Box>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
};