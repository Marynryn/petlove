
import React from 'react'
import { formatDateString } from '../../helpers/formatDate';
import { Box, Typography } from '@mui/material';
import theme from 'components/Theme';
const NewsItem = ({ props }) => {
    return (
        <Box  >
            <Box component="img" src={props.imgUrl} alt={props.title} sx={{
                width: "335px", mb: "20px", height: "190px", borderRadius: "15px", [theme.breakpoints.up("md")]: {
                    height: "226px", width: "340px", mb: "28px"
                },
                [theme.breakpoints.up("lg")]: {
                    width: "360px"
                }
            }}>
            </Box>
            <Typography sx={{
                fontWeight: 700, fontSize: "16px", mb: "12px", [theme.breakpoints.up("md")]: {
                    height: "52px", mb: "14px", fontSize: "20px",
                    width: "340px", display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis', lineHeight: "26px", [theme.breakpoints.up("lg")]: {
                        width: "360px"
                    }
                },
            }}>{props.title}</Typography>
            <Typography sx={{
                fontWeight: 500, fontSize: "14px", mb: "19px", height: "80px", letterSpacing: "-0.28px", [theme.breakpoints.up("md")]: {
                    mb: "28px", fontSize: "16px", letterSpacing: "-0.32px", width: "340px", display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis', lineHeight: "20px", [theme.breakpoints.up("lg")]: {
                        width: "360px"
                    }
                },
            }}>{props.text}</Typography>
            <Box sx={{
                display: "flex", justifyContent: "space-between", [theme.breakpoints.up("md")]: {
                    mb: "28px"
                },
            }}>
                <Typography sx={{
                    fontSize: "14px", [theme.breakpoints.up("md")]: {
                        fontSize: "16px"
                    },
                }}>{formatDateString(props.date)}</Typography>
                <a href={props.url} style={{
                    color: "var(--secondary-color)", textAlign: "center", textDecoration: "none",
                }}><Typography sx={{
                    fontSize: "14px",
                    [theme.breakpoints.up("md")]: {
                        fontSize: "16px"
                    },
                }}>Read more</Typography></a>
            </Box>

        </Box>)
}

export default NewsItem;