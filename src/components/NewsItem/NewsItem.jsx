
import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';
const NewsItem = ({ props }) => {
    return (
        <Box  >
            <img src={props.imgUrl} alt={props.title} style={{ width: "335px", marginBottom: "20px", height: "190px", borderRadius: "15px" }} />
            <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: "12px" }}>{props.title}</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "14px", mb: "19px", height: "80px", overflow: "hidden", letterSpacing: "-0.28px" }}>{props.text}</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "14px" }}>{formatDateString(props.date)}</Typography>
                <a href={props.url} style={{ color: "var(--secondary-color)", textAlign: "center", textDecoration: "none", fontSize: "14px" }}>Read more</a>
            </Box>

        </Box>)
}

export default NewsItem;