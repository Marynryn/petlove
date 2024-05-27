import React from "react";
import EventItem from "components/NewsItem/NewsItem";
import { Box, List, ListItem } from "@mui/material";

const NewsList = ({ news }) => {


    return (
        <Box>
            <List sx={{ p: 0 }}>
                {news.map((el) => (
                    <ListItem key={el._id} sx={{ p: 0, mb: "24px" }}>
                        <EventItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NewsList;
