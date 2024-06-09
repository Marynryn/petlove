import { Box, Typography } from '@mui/material';
import AddPet from 'components/AddPet/AddPet';
import PetsList from 'components/PetsList/PetsList';
import theme from 'components/Theme';
import React from 'react'

export const PetsBlock = () => {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: "20px", alignItems: "center" }}>
                <Typography variant="h4" sx={{
                    fontSize: "16px",
                    fontWeight: 700, [theme.breakpoints.up("md")]: {
                        fontSize: "18px",

                    },
                }}>
                    My pets
                </Typography>
                <AddPet />
            </Box>

            <PetsList />
        </div>
    )
}
export default PetsBlock;