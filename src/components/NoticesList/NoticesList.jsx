import React from 'react'
import { Box, List, ListItem } from "@mui/material";
import NoticesItem from 'components/NoticesItem/NoticesItem';
import theme from 'components/Theme';

export const NoticesList = ({ props }) => {
    if (props.length === 0) return null;
    return (
        <Box>
            <List sx={{
                p: 0, [theme.breakpoints.up("md")]: {
                    display: "flex", flexWrap: "wrap", gap: "20px 20px"
                },
            }}>
                {props.map((el) => (
                    <ListItem key={el._id} sx={{
                        p: 0, mb: "24px", [theme.breakpoints.up("md")]: {
                            width: "342px",
                            mb: 0
                        },
                    }}>
                        <NoticesItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default NoticesList;