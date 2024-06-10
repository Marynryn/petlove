import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Typography } from '@mui/material';
import PetInfo from 'components/PetInfo/PetInfo';
import sprite from '../../img/svg/symbol-defs.svg'
import { removeMyPet } from './../../store/operations';
import theme from 'components/Theme';


export const PetsItem = ({ props }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeMyPet(props._id))
    }

    const style = {
        backgroundColor: "#FFF4DF", height: "30px", width: "30px", borderRadius: "100%", '&:hover': {
            backgroundColor: "#F9B020"
        }, minWidth: "30px", p: 0
    }
    return (
        <Box sx={{
            p: "12px 12px 16px 16px", textAlign: 'center', position: "relative", display: "flex", border: "1px solid rgba(38, 38, 38, 0.10)", borderRadius: "20px", width: "100%", [theme.breakpoints.up("md")]: {
                p: "12px 12px 23px 16px"
            },
        }}>
            <Box >

                <Box component="img" src={props.imgURL} alt={props.title} sx={{
                    width: "66px", height: "66px", objectFit: 'cover', borderRadius: "100%", mx: "auto", [theme.breakpoints.up("md")]: {
                        width: "75px", height: "75px", gap: "14px"
                    },
                }} />
            </Box>
            <Box sx={{
                display: "flex", gap: "4px", ml: "14px", [theme.breakpoints.up('lg')]: {
                    width: "320px", justifyContent: "space-between"
                },
            }}>
                <Box sx={{
                    [theme.breakpoints.up('lg')]: {
                        width: "243px"
                    },
                }} >
                    <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: "2px", textTransform: "capitalize", textOverflow: 'ellipsis' }}>{props.title}</Typography>


                    <PetInfo props={props} hidden={true} addPet={true} />

                </Box>



                <Button onClick={handleClick} sx={style}  >
                    <svg width={16} height={16}>
                        <use href={`${sprite}#icon-trash-01`} style={{ fill: "var(--secondary-color)" }} ></use>
                    </svg>
                </Button>


            </Box>
        </Box >
    )
}
export default PetsItem;