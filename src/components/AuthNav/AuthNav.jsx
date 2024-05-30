import { List, ListItem } from '@mui/material';
import Btn from 'components/Button/Button';
import { NavLink, useLocation } from 'react-router-dom';


export const AuthNav = () => {

    const location = useLocation();

    const isNoticesPage = location.pathname === '/notices';
    return (
        <List sx={{ p: 0, display: isNoticesPage ? "flex" : "block", gap: "8px" }}>
            <ListItem sx={{ p: 0 }}>
                <NavLink to="/login" style={{ textDecoration: "none", width: "100%" }}>
                    <Btn bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"}  >Log In</Btn>
                </NavLink></ListItem>
            <ListItem sx={{ p: 0, mb: isNoticesPage ? 0 : "8px" }}>
                <NavLink to="/register" style={{ textDecoration: "none", width: "100%" }}>
                    <Btn bgColor={"var(--accent-color)"} textColor={"var(--secondary-color)"} >Registration</Btn>

                </NavLink></ListItem>

        </List>
    );
};