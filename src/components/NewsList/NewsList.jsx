import React from "react";
import NewsItem from "components/NewsItem/NewsItem";
import { Box, List, ListItem } from "@mui/material";
import theme from "components/Theme";

const NewsList = ({ news }) => {


    return (
        <Box sx={{
            mx: "auto",
            [theme.breakpoints.up("sm")]: {
                mx: "auto", width: "340px",
            },
            [theme.breakpoints.up("md")]: {
                mx: "auto", width: "704px"
            },
            [theme.breakpoints.up("lg")]: {
                mx: "auto", width: "1153px"
            }
        }} >
            <List sx={{
                p: 0, mt: "34px", [theme.breakpoints.up("md")]: {
                    mt: "44px", display: "flex", flexWrap: "wrap", gap: " 32px 24px"
                }, [theme.breakpoints.up("lg")]: {
                    gap: "40px 35px",
                },
            }}>
                {news.map((el) => (
                    <ListItem key={el._id} sx={{
                        [theme.breakpoints.up("sm")]: {
                            width: "335px",
                        },
                        p: 0, mb: "24px", [theme.breakpoints.up("md")]: {
                            width: "340px",
                            m: "0", height: "476px"
                        }, [theme.breakpoints.up("lg")]: {
                            width: "360px",

                        },
                    }}>
                        <NewsItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NewsList;
