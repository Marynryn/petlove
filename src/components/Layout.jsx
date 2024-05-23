import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom/dist';
import { Toaster } from 'react-hot-toast';


export const Layout = () => {
    const location = useLocation();
    const path = location.pathname;


    const shouldRenderHeader = path !== '/';
    return (
        <Box >
            <Suspense fallback={<Loader />}>
                <Box sx={{ p: "20px " }} >
                    {shouldRenderHeader && <Header backgroundColor={"inherit"} iconColor={"var(--primary-color)"} />}
                    <Outlet />
                </Box>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Box>
    );
};