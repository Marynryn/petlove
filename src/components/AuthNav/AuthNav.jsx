import { List, ListItem } from '@mui/material';
import Btn from 'components/Button/Button';
import { NavLink, } from 'react-router-dom';


export const AuthNav = ({ flex }) => {


    return (
        <List sx={{ p: 0, display: flex ? "flex" : "block", gap: "8px", width: "100%" }}>
            <ListItem sx={{ p: 0, mb: flex ? 0 : "8px", }}>
                <NavLink to="/login" style={{ textDecoration: "none", width: "100%" }}>
                    <Btn bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"}  >LOG IN</Btn>
                </NavLink></ListItem>
            <ListItem sx={{ p: 0, mb: flex ? 0 : "8px" }}>
                <NavLink to="/register" style={{ textDecoration: "none", width: "100%" }}>
                    <Btn bgColor={"var(--accent-color)"} textColor={"var(--secondary-color)"} >REGISTRATION</Btn>

                </NavLink></ListItem>

        </List>
    );
};