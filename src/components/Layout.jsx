import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loader from './Loader/Loader';


export const Layout = () => {



    return (
        <div className=' bg-emerald-200'  >

            <Suspense fallback={<Loader />}>
                <Outlet />

            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};