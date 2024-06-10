import React from 'react'
import { Box, List, ListItem } from "@mui/material";
import NoticesItem from 'components/NoticesItem/NoticesItem';
import theme from 'components/Theme';
import { useLocation } from 'react-router-dom';

export const NoticesList = ({ props }) => {
    const location = useLocation();
    const profile = location.pathname === "/profile"
    if (props.length === 0) return null;
    return (
        <Box>
            <List sx={{
                p: 0, [theme.breakpoints.up("md")]: {
                    display: "flex", flexWrap: "wrap", gap: "20px 20px"
                },
                [theme.breakpoints.up("lg")]: {
                    gap: profile ? "24px" : "40px 32px", px: "31px"
                }
            }}>
                {props.map((el) => (
                    <ListItem key={el._id} sx={{
                        p: 0, mb: "24px", [theme.breakpoints.up("md")]: {
                            width: "342px",
                            mb: 0
                        },
                        [theme.breakpoints.up("lg")]: {
                            width: profile ? "320px" : "363px"
                        }
                    }}>
                        <NoticesItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default NoticesList;