import StarIcon from '@mui/icons-material/Star';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, IconButton, Typography } from '@mui/material';
import sprite from '../../img/svg/symbol-defs.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalWrap from 'components/ModalWrap/ModalWrap';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { IsLoggedIn } from 'helpers/isLoggedIn';
import PetInfo from 'components/PetInfo/PetInfo';
import { addToFavorite, removeFromFavorite } from 'store/operations';
import { selectNoticeFavoriteFullInfo } from 'store/selectors';
import theme from 'components/Theme';

const NoticesItem = ({ props }) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalAttentionOpen, setModalAttentionOpen] = useState(false);
    const [isModalNoticeOpen, setModalNoticeOpen] = useState(false);
    const { isLogIn } = IsLoggedIn();
    const favorites = useSelector(selectNoticeFavoriteFullInfo);
    const ids = favorites.map(item => item._id);

    useEffect(() => {
        const localFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(ids.includes(props._id) || localFavorites.includes(props._id));
    }, [ids, props._id]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(ids));
    }, [ids]);

    const handleFavoriteClick = () => {
        if (!isLogIn) {
            setModalAttentionOpen(true);
        } else {
            const localFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            if (isFavorite) {
                dispatch(removeFromFavorite(props._id));
                localStorage.setItem('favorites', JSON.stringify(localFavorites.filter(id => id !== props._id)));
            } else {
                dispatch(addToFavorite(props._id));
                localStorage.setItem('favorites', JSON.stringify([...localFavorites, props._id]));
            }
            setIsFavorite(!isFavorite);
        }
    };

    const handleLearnMoreClick = () => {
        if (!isLogIn) {
            setModalAttentionOpen(true);
        } else {
            setModalNoticeOpen(true);
        }
    };

    return (
        <Box p="24px" width="100%" bgcolor={'var(--background-color)'} sx={{
            minWidth: "232px", borderRadius: "16px", height: "430px", position: "relative", [theme.breakpoints.up("md")]: {
                p: "32px",
                height: "380px"
            }, [theme.breakpoints.down("md")]: {

            },
        }}>
            <Box component="img" src={props.imgURL} alt={props.title} sx={{ width: "100%", objectFit: 'cover', marginBottom: "24px", height: "178px", borderRadius: "16px" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{
                    fontWeight: 700, fontSize: "16px", textOverflow: 'ellipsis', overflow: "hidden", [theme.breakpoints.up("md")]: {
                        fontSize: "18px",
                    },
                }}>{props.title}</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon sx={{ color: "var(--secondary-color)", width: "16px", height: "16px" }} />
                    <Typography sx={{ fontSize: "14px" }}>{props.popularity}</Typography>
                </Box>
            </Box>
            <PetInfo props={props} />
            <Typography sx={{
                fontWeight: 500, fontSize: "14px", overflow: "hidden", letterSpacing: "-0.28px", [theme.breakpoints.up("md")]: {
                    lineHeight: "18px"
                },
            }}>{props.comment}</Typography>
            <Box sx={{
                display: "flex", gap: "10px", bottom: "25px", position: "absolute", justifyContent: "space-between", [theme.breakpoints.down("sm")]: {

                }, [theme.breakpoints.up("md")]: {
                    bottom: "32px",
                },
            }}>

                <Button sx={{
                    backgroundColor: "var(--secondary-color)", color: "var(--background-color)", height: "46px", textTransform: 'capitalize', fontSize: "14px", borderRadius: "30px", fontWeight: 500, p: "12px 30px", [theme.breakpoints.down("sm")]: {

                    }, [theme.breakpoints.up("sm")]: { p: "12px 59px", }, [theme.breakpoints.up("lg")]: {

                    }
                }} onClick={handleLearnMoreClick}>
                    Learn more
                </Button>
                <Box sx={{ borderRadius: "30px", backgroundColor: " #FFF4DF", width: "46px", height: "46px", display: "flex", justifyContent: "center", }}>
                    <IconButton onClick={handleFavoriteClick} sx={{ p: 0, height: "24px", mt: "12px" }}>
                        {isFavorite ? (
                            <Box>
                                <svg width={18} height={18}>
                                    <use href={`${sprite}#icon-trash-01`} style={{ fill: "var(--secondary-color)" }}></use>
                                </svg>
                            </Box>
                        ) : (
                            <FavoriteBorderIcon sx={{ fill: "var(--secondary-color)" }} />
                        )}
                    </IconButton>
                </Box>
            </Box>
            <ModalWrap isOpen={isModalAttentionOpen} onClose={() => setModalAttentionOpen(false)}>
                <ModalAttention />
            </ModalWrap>
            <ModalWrap isOpen={isModalNoticeOpen} onClose={() => setModalNoticeOpen(false)}>
                <ModalNotice props={props} />
            </ModalWrap>
        </Box>
    );
};

export default NoticesItem;
