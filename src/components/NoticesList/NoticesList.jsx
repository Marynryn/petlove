import React from 'react'
import { Box, List, ListItem } from "@mui/material";
import NoticesItem from 'components/NoticesItem/NoticesItem';

export const NoticesList = ({ props }) => {
    if (props.length === 0) return null;
    return (
        <Box>
            <List sx={{ p: 0 }}>
                {props.map((el) => (
                    <ListItem key={el._id} sx={{ p: 0, mb: "24px" }}>
                        <NoticesItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default NoticesList;