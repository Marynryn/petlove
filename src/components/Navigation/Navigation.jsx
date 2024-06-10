import { Button, List, ListItem } from '@mui/material';
import theme from 'components/Theme';
import { NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {
    const location = useLocation();
    const home = location.pathname === "/";

    const buttonStyle = (isActive) => ({
        color: "var(--primary-color)",
        width: "120px",
        height: "48px",
        borderRadius: "30px",
        border: isActive ? "1px solid var(--secondary-color)" : "1px solid rgba(38, 38, 38, 0.15)",
        textTransform: 'capitalize',
        '&:hover': {
            borderColor: 'var(--secondary-color)',
            backgroundColor: 'var(--background-color)'
        },
        '&:focus': {
            borderColor: 'var(--secondary-color)',
            backgroundColor: 'var(--background-color)'
        },
        [theme.breakpoints.up("lg")]: {
            border: home ? "1px solid #fff" : isActive ? "1px solid var(--secondary-color)" : "1px solid rgba(38, 38, 38, 0.15)",
            color: home ? "#fff" : "var(--primary-color)",
        },
    });

    return (
        <nav style={{ textAlign: "center" }}>
            <List sx={{
                p: 0,
                '&.MuiList-dense': {
                    paddingTop: 0,
                    paddingBottom: 0
                },
                [theme.breakpoints.up("lg")]: {
                    display: "flex", gap: "10px"
                },
            }}>
                <ListItem sx={{
                    justifyContent: "center", p: 0, mb: "10px", [theme.breakpoints.up("lg")]: {
                        mb: 0
                    },
                }}>
                    <NavLink to="/news" style={{ textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <Button variant="outlined" sx={buttonStyle(isActive)}>News</Button>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem sx={{
                    justifyContent: "center", p: 0, mb: "10px", [theme.breakpoints.up("lg")]: {
                        mb: 0
                    },
                }}>
                    <NavLink to="/notices" style={{ textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <Button variant="outlined" sx={buttonStyle(isActive)}>Find pet</Button>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem sx={{ justifyContent: "center", p: 0 }}>
                    <NavLink to="/friends" style={{ textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <Button variant="outlined" sx={buttonStyle(isActive)}>Our friends</Button>
                        )}
                    </NavLink>
                </ListItem>
            </List>
        </nav>
    );
};
