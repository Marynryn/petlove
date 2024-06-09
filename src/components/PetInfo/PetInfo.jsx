import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';


export const PetInfo = ({ props, hidden }) => {
    const location = useLocation();
    const profile = location.pathname === "/profile";

    const styleCategory = {
        fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5, textAlign: "left"
    }
    const styleProps = {
        fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px", textTransform: "capitalize", textAlign: "left"
    }
    return (
        <Box sx={{
            display: "flex", gap: "10px", mt: "8px", mb: profile ? 0 : "16px", justifyContent: "space-between", minWidth: profile ? "100px" : "232px", overflow: 'hidden',
            textOverflow: 'ellipsis', flexWrap: profile ? 'wrap' : 'nowrap',
        }}>
            <Box>
                <Typography sx={styleCategory}>Name</Typography>
                <Typography sx={styleProps}>{props.name}</Typography>
            </Box>
            <Box>
                <Typography sx={styleCategory}>Birthday</Typography>
                <Typography sx={styleProps}>{formatDateString(props.birthday)}</Typography>
            </Box>
            <Box>
                <Typography sx={styleCategory}>Sex</Typography>
                <Typography sx={styleProps}>{props.sex}</Typography>
            </Box>
            <Box>
                <Typography sx={styleCategory}>Species</Typography>
                <Typography sx={styleProps}>{props.species}</Typography>
            </Box>
            {!hidden && <Box>

                <Typography sx={{
                    fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5, overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>Category</Typography>
                <Typography sx={styleProps}>{props.category}</Typography>
            </Box>}

        </Box>
    )
}
export default PetInfo;