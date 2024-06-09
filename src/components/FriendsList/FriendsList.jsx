import React from 'react'
import { Box, List, ListItem } from "@mui/material";
import FriendItem from 'components/FriendItem/FriendItem';
import theme from 'components/Theme';


export const FriendsList = ({ friends }) => {
    return (
        <Box>
            <List sx={{
                p: 0, mt: "40px", [theme.breakpoints.up("md")]: {
                    display: "flex", flexWrap: "wrap",
                    mt: "44px", gap: "25px 20px"
                },
            }}>
                {friends.map((el) => (
                    <ListItem key={el._id} sx={{
                        p: 0, mb: "20px", [theme.breakpoints.up("md")]: {
                            width: "342px", height: "196px", mb: 0
                        }
                    }}>
                        <FriendItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box >
    )
}
export default FriendsList;