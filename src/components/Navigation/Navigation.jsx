import { Button, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';



export const Navigation = () => {
    const buttonStyle = {
        color: "var(--primary-color)",
        width: "120px",
        height: "48px",
        borderRadius: "30px",
        border: "1px solid rgba(38, 38, 38, 0.15)",
        textTransform: 'capitalize',
        '&:hover': {
            borderColor: 'var(--secondary-color)',
            backgroundColor: 'var(--background-color)'
        },
        '&:focus': {
            borderColor: 'var(--secondary-color)',
            backgroundColor: 'var(--background-color)'
        }
    }

    return (
        <nav style={{ textContent: "center" }}>
            <List sx={{

                p: 0,
                '&.MuiList-dense': {
                    paddingTop: 0,
                    paddingBottom: 0
                }
            }} >
                <ListItem sx={{ justifyContent: "center", p: 0, mb: "10px" }} >
                    <NavLink to="/news" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" sx={buttonStyle}>News</Button>
                    </NavLink>
                </ListItem>
                <ListItem sx={{ justifyContent: "center", p: 0, mb: "10px" }}>
                    <NavLink to="/notices" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" sx={buttonStyle}>Notices</Button>
                    </NavLink>
                </ListItem>
                <ListItem sx={{ justifyContent: "center", p: 0 }}>
                    <NavLink to="/friends" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" sx={buttonStyle}>Friends</Button>
                    </NavLink>
                </ListItem>
            </List>
        </nav>
    );
};