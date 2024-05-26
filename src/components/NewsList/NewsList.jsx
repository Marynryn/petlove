import React from "react";
import EventItem from "components/NewsItem/NewsItem";
import { Box, List, ListItem } from "@mui/material";

const NewsList = ({ news }) => {


    return (
        <Box>
            <List >
                {news.map((el) => (
                    <ListItem key={el._id}  >
                        <EventItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NewsList;
