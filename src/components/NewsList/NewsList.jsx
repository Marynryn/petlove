import React from "react";
import NewsItem from "components/NewsItem/NewsItem";
import { Box, List, ListItem } from "@mui/material";

const NewsList = ({ news }) => {


    return (
        <Box>
            <List sx={{ p: 0, mt: "34px" }}>
                {news.map((el) => (
                    <ListItem key={el._id} sx={{ p: 0, mb: "24px" }}>
                        <NewsItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NewsList;
