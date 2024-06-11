import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticesById } from 'store/operations';
import { selectNoticeById } from './../../store/selectors';
import { Box, Button, Link, Typography } from '@mui/material';
import PetInfo from 'components/PetInfo/PetInfo';
import sprite from '../../img/svg/symbol-defs.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stars from 'components/Stars/Stars';
import theme from 'components/Theme';

export const ModalNotice = ({ props, handleToggleFavorite, isFavorite }) => {
    const dispatch = useDispatch();
    const infoPet = useSelector(selectNoticeById);

    useEffect(() => {
        dispatch(getNoticesById(props._id));
    }, [dispatch, props._id]);

    const style = {
        backgroundColor: "var(--secondary-color)",
        color: "var(--background-color)",
        height: "46px",
        width: "100%",
        textTransform: 'capitalize',
        fontSize: "14px",
        borderRadius: "30px",
        fontWeight: 500,
        '&:hover': { backgroundColor: "#F9B020" },
        [theme.breakpoints.up("md")]: {
            width: "160px",
        },
    };

    return (<Box>
        <Box sx={{
            mb: "20px",
            textAlign: 'center',
            position: "relative",
            height: "386px",
            width: "280px",
            [theme.breakpoints.up("md")]: {
                mx: "52px",
                width: "334px",
                height: "406px"
            },
        }}>
            <Box sx={{ mt: "20px" }}>
                <Box sx={{ position: "absolute", right: "55%", borderRadius: "30px", backgroundColor: " #FFF4DF", }}>
                    <Typography sx={{ p: "8px 14px", textTransform: 'capitalize', fontWeight: 500, fontSize: "12px", color: "var(--secondary-color)", }}>
                        {infoPet.category}
                    </Typography>
                </Box>
                <Box component="img" src={infoPet.imgURL} alt={infoPet.title} sx={{
                    width: "120px",
                    height: "120px",
                    objectFit: 'cover',
                    mb: "24px",
                    borderRadius: "100%",
                    mx: "auto",
                    [theme.breakpoints.up("md")]: {
                        width: "150px",
                        height: "150px",
                        mb: "16px"
                    },
                }} />
            </Box>
            <Box>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    mb: "10px",
                    [theme.breakpoints.up("md")]: {
                        fontSize: "18px"
                    },
                }}>
                    {infoPet.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: "24px" }} >
                    <Stars popularity={infoPet.popularity} />
                    <Typography sx={{ fontSize: "14px" }}>{infoPet.popularity}</Typography>
                </Box>
            </Box>
            <Box px="26px" sx={{ [theme.breakpoints.up("md")]: { px: "43px" } }}>
                <PetInfo props={infoPet} hidden={true} />
            </Box>
            <Typography sx={{
                fontWeight: 500,
                fontSize: "14px",
                overflow: "hidden",
                letterSpacing: "-0.28px",
                mb: "42px",
                [theme.breakpoints.up("md")]: {
                    px: "34px"
                },
            }}>
                {infoPet.comment}
            </Typography>
            <Box sx={{
                display: "flex",
                gap: "10px",
                position: "absolute",
                bottom: "20px",
                width: "100%",
                px: "8px",
                [theme.breakpoints.up("md")]: {
                    width: "330px",
                    p: 0
                },
            }}>
                {isFavorite ? (
                    <Button onClick={() => handleToggleFavorite(props._id)} sx={style}>
                        Remove from&nbsp;&nbsp;
                        <svg width={18} height={18}>
                            <use href={`${sprite}#icon-trash-01`} style={{ paddingLeft: "8px", fill: "var(--background-color)" }} ></use>
                        </svg>
                    </Button>
                ) : (
                    <Button onClick={() => handleToggleFavorite(props._id)} sx={style}>
                        Add to&nbsp;&nbsp;
                        <FavoriteBorderIcon pl="8px" sx={{ fontSize: "18px", stroke: "var(--background-color)" }} />
                    </Button>
                )}

                {infoPet.user && (
                    <Link href={`mailto:${infoPet.user.email}`} target="_blank" rel="noopener" sx={{
                        textDecoration: 'none', width: "100%", [theme.breakpoints.up("md")]: {
                            width: "160px",
                        },
                    }}>
                        <Button sx={{
                            backgroundColor: " #FFF4DF",
                            color: "var(--secondary-color)",
                            height: "46px",
                            width: "100%",
                            textTransform: 'capitalize',
                            fontSize: "16px",
                            borderRadius: "30px",
                            fontWeight: 500,
                            '&:hover': { backgroundColor: "#FBE7C1" },
                            [theme.breakpoints.up("md")]: {
                                width: "160px",
                            },
                        }}>
                            Contact
                        </Button>
                    </Link>
                )}
            </Box>
        </Box></Box>
    );
}

export default ModalNotice;
