import React from 'react'
import { Box, List, ListItem } from "@mui/material";
import FriendItem from 'components/FriendItem/FriendItem';


export const FriendsList = ({ friends }) => {
    return (
        <Box>
            <List sx={{ p: 0 }}>
                {friends.map((el) => (
                    <ListItem key={el._id} sx={{ p: 0, mb: "20px" }}>
                        <FriendItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box >
    )
}
export default FriendsList;