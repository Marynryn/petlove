import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';
const NoticesItem = ({ props }) => {
    return (
        <Box p="24px" width="100%" bgcolor={'var(--background-color)'} sx={{ minWidth: "232px", borderRadius: "16px", }}>
            <img src={props.imgURL} alt={props.title} style={{ width: "100%", objectFit: 'cover', marginBottom: "24px", height: "178px", borderRadius: "16px" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>{props.title}</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }} >
                    <StarIcon sx={{ color: "var(--secondary-color)", width: "16px", height: "16px" }} />
                    <Typography sx={{ fontSize: "14px" }}>{props.popularity}</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: "flex", gap: "10px", mt: "8px", mb: "16px", justifyContent: "space-between", minWidth: "232px", overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5 }}>Name</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px" }}>{props.name}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5 }}>Birthday</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px" }}>{formatDateString(props.birthday)}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5 }}>Sex</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px" }}>{props.sex}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5 }}>Species</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px" }}>{props.species}</Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5, overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>Category</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px" }}>{props.category}</Typography>
                </Box>
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: "14px", overflow: "hidden", letterSpacing: "-0.28px" }}>{props.comment}</Typography>
            {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "14px" }}>{formatDateString(props.date)}</Typography>
                <a href={props.url} style={{ color: "var(--secondary-color)", textAlign: "center", textDecoration: "none", fontSize: "14px" }}>Read more</a>
            </Box> */}

        </Box>)
}

export default NoticesItem;