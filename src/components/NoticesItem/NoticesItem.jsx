import StarIcon from '@mui/icons-material/Star';
import React, { useState } from 'react'

import { Box, Button, IconButton, Typography } from '@mui/material';
import sprite from '../../img/svg/symbol-defs.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalWrap from 'components/ModalWrap/ModalWrap';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { IsLoggedIn } from 'helpers/isLoggedIn';
import PetInfo from 'components/PetInfo/PetInfo';

const NoticesItem = ({ props }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalAttentionOpen, setModalAttentionOpen] = useState(false);
    const [isModalNoticeOpen, setModalNoticeOpen] = useState(false);
    const { isLogIn } = IsLoggedIn();
    console.log(isLogIn)
    const handleFavoriteClick = () => {
        if (!isLogIn) {
            setModalAttentionOpen(true);
        } else {
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
        <Box p="24px" width="100%" bgcolor={'var(--background-color)'} sx={{ minWidth: "232px", borderRadius: "16px", }}>
            <img src={props.imgURL} alt={props.title} style={{ width: "100%", objectFit: 'cover', marginBottom: "24px", height: "178px", borderRadius: "16px" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>{props.title}</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }} >
                    <StarIcon sx={{ color: "var(--secondary-color)", width: "16px", height: "16px" }} />
                    <Typography sx={{ fontSize: "14px" }}>{props.popularity}</Typography>
                </Box>
            </Box>
            <PetInfo props={props} />
            <Typography sx={{ fontWeight: 500, fontSize: "14px", overflow: "hidden", letterSpacing: "-0.28px", mb: "42px" }}>{props.comment}</Typography>
            <Box style={{ display: "flex", gap: "10px" }}>
                <Button sx={{ backgroundColor: "var(--secondary-color)", color: "var(--background-color)", width: "calc(100% - 56px)", height: "46px", textTransform: 'capitalize', fontSize: "14px", borderRadius: "30px", fontWeight: 500, }} onClick={handleLearnMoreClick}>Learn more</Button>
                <Box sx={{ borderRadius: "30px", backgroundColor: " #FFF4DF", width: "46px", height: "46px", display: "flex", justifyContent: "center" }}>
                    <IconButton onClick={handleFavoriteClick}>
                        {isFavorite ? (
                            <Box>
                                <svg width={18} height={18}>
                                    <use href={`${sprite}#icon-trash-01`} style={{ fill: "var(--secondary-color)" }} ></use>
                                </svg>
                            </Box>

                        ) : (
                            <FavoriteBorderIcon sx={{ fill: "var(--secondary-color)" }} />
                        )}
                    </IconButton>
                </Box>

            </Box>
            <ModalWrap isOpen={isModalAttentionOpen} onClose={setModalAttentionOpen}>
                <ModalAttention />
            </ModalWrap>
            <ModalWrap isOpen={isModalNoticeOpen} onClose={setModalNoticeOpen}>
                <ModalNotice props={props} />
            </ModalWrap>
        </Box >)
}

export default NoticesItem;