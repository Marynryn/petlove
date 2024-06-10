
import { Box } from '@mui/material';
import AddPetForm from 'components/AddPetForm/AddPetForm';
import PetBlock from 'components/PetBlock/PetBlock';
import theme from 'components/Theme';
import React from 'react'


export const AddPetPage = () => {
    return (
        <Box sx={{
            [theme.breakpoints.up("lg")]: {
                display: "flex", gap: "32px", mt: "32px"
            },
        }} >
            <PetBlock />
            <AddPetForm />
        </Box>
    )
}
export default AddPetPage;