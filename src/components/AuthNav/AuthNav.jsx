import { List, ListItem } from '@mui/material';
import Btn from 'components/Button/Button';
import theme from 'components/Theme';
import { NavLink, } from 'react-router-dom';


export const AuthNav = ({ flex }) => {


    return (
        <List sx={{
            p: 0, display: flex ? "flex" : "block", gap: "8px", width: "100%", [theme.breakpoints.up('md')]: {
                display: "flex",
                px: "30px"
            }, [theme.breakpoints.up("lg")]: {
                px: 0

            },
        }}>
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