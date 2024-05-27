import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import("../pages/Home/Home"))
const News = lazy(() => import("../pages/News/News"))
const Registration = lazy(() => import("../pages/Registration/Registration"))
const Login = lazy(() => import("../pages/Login/Login"))
const Notices = lazy(() => import("../pages/Notices/Notices"))
const Profile = lazy(() => import("../pages/Profile/Profile"))
const Friends = lazy(() => import("../pages/Friends/Friends"))
// const Registration = lazy(() => import('../pages/Registration/Registration'));
// const Participants = lazy(() => import('../pages/Participants/Participants'));
// const Board = lazy(() => import('../pages/Board/Board'));



export const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<Friends />} />
        {/* <Route path="/add-pet" element={<Notices />} /> */}
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} redirectTo="/login" />} />
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
