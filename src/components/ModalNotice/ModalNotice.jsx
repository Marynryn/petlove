import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, getNoticesById, removeFromFavorite } from 'store/operations';
import { selectNoticeById } from './../../store/selectors';
import { Box, Button, Link, Typography } from '@mui/material';
import PetInfo from 'components/PetInfo/PetInfo';
import sprite from '../../img/svg/symbol-defs.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stars from 'components/Stars/Stars';

export const ModalNotice = ({ props }) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const infoPet = useSelector(selectNoticeById);

    useEffect(() => {
        dispatch(getNoticesById(props._id));

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(props._id));
    }, [dispatch, props._id]);
    console.log(infoPet)
    useEffect(() => {

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite && !favorites.includes(props._id)) {
            favorites.push(props._id);
        } else if (!isFavorite && favorites.includes(props._id)) {
            const index = favorites.indexOf(props._id);
            if (index > -1) {
                favorites.splice(index, 1);
            }
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [isFavorite, props._id]);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(infoPet._id));
        } else {
            dispatch(addToFavorite(infoPet._id));
        }
        setIsFavorite(!isFavorite);
    };

    const style = {
        backgroundColor: "var(--secondary-color)", color: "var(--background-color)", height: "46px", width: "100%", textTransform: 'capitalize', fontSize: "14px", borderRadius: "30px", fontWeight: 500, '&:hover': { backgroundColor: "#F9B020" }
    }
    return (
        <Box sx={{ py: "20px", textAlign: 'center', position: "relative", height: "386px", width: "280px", }}>
            <Box>
                <Box sx={{ position: "absolute", right: "55%", borderRadius: "30px", backgroundColor: " #FFF4DF", }}><Typography sx={{ p: "8px 14px", textTransform: 'capitalize', fontWeight: 500, fontSize: "12px", color: "var(--secondary-color)", }}>{infoPet.category}</Typography></Box>
                <img src={infoPet.imgURL} alt={infoPet.title} style={{ width: "120px", height: "120px", objectFit: 'cover', marginBottom: "24px", borderRadius: "100%", mx: "auto", }} />
            </Box>
            <Box sx={{}}>
                <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: "10px" }}>{infoPet.title}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: "24px" }} >
                    <Stars popularity={infoPet.popularity} />
                    <Typography sx={{ fontSize: "14px" }}>{infoPet.popularity}</Typography>
                </Box>
            </Box>
            <Box px="26px"> <PetInfo props={infoPet} hidden={true} /></Box>

            <Typography sx={{ fontWeight: 500, fontSize: "14px", overflow: "hidden", letterSpacing: "-0.28px", mb: "42px" }}>{infoPet.comment}</Typography>
            <Box style={{ display: "flex", gap: "10px", position: "absolute", bottom: "20px", width: "100%", px: "8px" }}>

                {isFavorite ? (
                    <Button onClick={handleFavoriteClick} sx={style}  >Remove from&nbsp;&nbsp;
                        <svg width={18} height={18}>
                            <use href={`${sprite}#icon-trash-01`} style={{ paddingLeft: "8px", fill: "var(--background-color)" }} ></use>
                        </svg>
                    </Button>
                ) : (
                    <Button onClick={handleFavoriteClick} sx={style} > Add to&nbsp;&nbsp;
                        <FavoriteBorderIcon pl="8px" sx={{ fontSize: "18px", stroke: "var(--background-color)" }} /></Button>
                )}

                {infoPet.user && (<Link href={`mailto:${infoPet.user.email}`} target="_blank" rel="noopener" sx={{ textDecoration: 'none', width: "100%" }}>


                    <Button sx={{ backgroundColor: " #FFF4DF", color: "var(--secondary-color)", height: "46px", width: "100%", textTransform: 'capitalize', fontSize: "16px", borderRadius: "30px", fontWeight: 500, '&:hover': { backgroundColor: "#FBE7C1" }, }} >Contact</Button>
                </Link>)}
            </Box>
        </Box >
    )
}
export default ModalNotice;