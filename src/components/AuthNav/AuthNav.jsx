import { List, ListItem } from '@mui/material';
import Btn from 'components/Button/Button';
import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
    return (
        <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, mb: "8px" }}>
                <NavLink to="/register" style={{ textDecoration: "none", width: "100%" }}>
                    <Btn bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"} >Registration</Btn>

                </NavLink></ListItem>
            <ListItem sx={{ p: 0 }}>
                <NavLink to="/login" style={{ textDecoration: "none", width: "100%" }}>
                    <Btn bgColor={"var(--accent-color)"} textColor={"var(--secondary-color)"}  >Log In</Btn>
                </NavLink></ListItem>
        </List>
    );
};