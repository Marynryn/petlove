import { Button, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';



export const Navigation = () => {
    const style = {
        color: "var(--primary-color)",
        width: "120px",
        height: "48px",
        borderRadius: "30px",
        border: "1px solid rgba(38, 38, 38, 0.15)"
    }

    return (
        <nav className='' style={{}}>
            <List >
                <ListItem style={{}}>
                    <Button href="/news" variant="outlined" sx={style}>News</Button>
                </ListItem>
                <ListItem  >
                    <Button href="/notices" variant="outlined" sx={style}>Notices</Button></ListItem>
                <ListItem >
                    <Button href="/friends" variant="outlined" sx={style}>Friends</Button></ListItem>

            </List>


        </nav >

    );
};