import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';
export const PetInfo = ({ props, hidden }) => {

    const styleCategory = {
        fontWeight: 500, fontSize: "10px", letterSpacing: "-0.2px", opacity: 0.5
    }
    const styleProps = {
        fontWeight: 500, fontSize: "12px", letterSpacing: "-0.24px", textTransform: "capitalize",
    }
    return (
        <Box sx={{
            display: "flex", gap: "10px", mt: "8px", mb: "16px", justifyContent: "space-between", minWidth: "232px", overflow: 'hidden',
            textOverflow: 'ellipsis'
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