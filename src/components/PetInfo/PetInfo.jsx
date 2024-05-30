import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';
export const PetInfo = ({ props }) => {
    return (
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
    )
}
export default PetInfo;