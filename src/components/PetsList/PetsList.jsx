import React from 'react'
import { Box, List, ListItem } from "@mui/material";

import { useSelector } from 'react-redux';
import { selectPets } from 'store/selectors';
import PetsItem from 'components/PetsItem/PetsItem';

export const PetsList = () => {
    const pets = useSelector(selectPets);
    console.log(pets)
    if (pets.length === 0) return <Box height="1px"></Box>;
    return (
        <Box>
            <List sx={{ p: 0 }}>
                {pets.map((el) => (
                    <ListItem key={el._id} sx={{ p: 0, mb: "24px" }}>
                        <PetsItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default PetsList;