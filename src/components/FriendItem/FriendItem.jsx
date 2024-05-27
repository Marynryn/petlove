

import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';

const FriendItem = ({ props }) => {
    return (
        <Box sx={{ height: "184px", bgcolor: "var(--background-color)", width: "100%", borderRadius: "15px" }} >
            {/* <Typography>{props.workDays.from} - {props.workDays.to}</Typography> */}
            <Box sx={{display:"flex", gap: "14px"}}> 
                <Box><img src={props.imageUrl} alt={props.title} style={{ width: "80px", marginBottom: "20px", height: "80px", borderRadius: "15px" }} /></Box>
            <Box> 
                <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: "12px" }}>{props.title}</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "14px", mb: "19px", height: "80px", overflow: "hidden", letterSpacing: "-0.28px" }}> Email:<Typography> {props.email}</Typography></Typography>
           <Typography sx={{ fontWeight: 500, fontSize: "14px", mb: "19px", height: "80px", overflow: "hidden", letterSpacing: "-0.28px" }}> Address:<Typography> {props.address}</Typography></Typography>
           <Typography sx={{ fontWeight: 500, fontSize: "14px", mb: "19px", height: "80px", overflow: "hidden", letterSpacing: "-0.28px" }}> Phone:<Typography> {props.phone}</Typography></Typography>
            </Box>
           
    </Box>

        </Box>)
}

export default FriendItem;