import React from 'react'
import { Box, List, ListItem } from "@mui/material";

import { useSelector } from 'react-redux';
import { selectPets } from 'store/selectors';
import PetsItem from 'components/PetsItem/PetsItem';
import theme from 'components/Theme';

export const PetsList = () => {
    const pets = useSelector(selectPets);

    if (pets.length === 0) return <Box height="1px"></Box>;
    return (
        <Box>
            <List sx={{
                p: 0, [theme.breakpoints.up("md")]: {
                    display: "flex", flexWrap: "wrap", gap: "14px"
                },
                [theme.breakpoints.up('lg')]: {
                    display: "bloc"
                },

            }}>
                {pets.map((el) => (
                    <ListItem key={el._id} sx={{
                        p: 0, mb: "24px", [theme.breakpoints.up("md")]: {
                            width: "305px",
                            mb: 0
                        },
                        [theme.breakpoints.up('lg')]: {
                            width: "440px"
                        },

                    }}>
                        <PetsItem props={el} />

                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default PetsList;