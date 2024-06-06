import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUser } from 'store/operations';
import Loader from './Loader/Loader';
import { selectIsRefreshing, selectNoticeFavorite } from 'store/selectors';

const Home = lazy(() => import("../pages/Home/Home"))
const News = lazy(() => import("../pages/News/News"))
const Registration = lazy(() => import("../pages/Registration/Registration"))
const Login = lazy(() => import("../pages/Login/Login"))
const Notices = lazy(() => import("../pages/Notices/Notices"))
const Profile = lazy(() => import("../pages/Profile/Profile"))
const Friends = lazy(() => import("../pages/Friends/Friends"))
const AddPetPage = lazy(() => import('./../pages/AddPetPage/AddPetPage'))




export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const favorites = useSelector(selectNoticeFavorite);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  return isRefreshing ? (
    <Loader />
  ) : (

    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<Friends />} />

        <Route
          path="/add-pet"
          element={<PrivateRoute component={<AddPetPage />} redirectTo="/login" />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<Profile />} redirectTo="/login" />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/profile" component={<Registration />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/profile" component={<Login />} />
          }
        />


        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
