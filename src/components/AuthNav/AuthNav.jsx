import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
    return (
        <div className="">
            <NavLink className="" to="/register">
                Registration
            </NavLink>
            <NavLink className="" to="/login">
                Log In
            </NavLink>
        </div>
    );
};