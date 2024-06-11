import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import NoticesList from 'components/NoticesList/NoticesList';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserFull } from 'store/operations';
import { selectNoticeFavoriteFullInfo, selectUser } from 'store/selectors';
import theme from 'components/Theme';


const MyNotices = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [favorite, setFavorite] = useState([]);
    const dispatch = useDispatch();
    const noticesFavorites = useSelector(selectNoticeFavoriteFullInfo)
    const user = useSelector(selectUser)
    useEffect(() => {
        dispatch(currentUserFull());

    }, [dispatch, activeTab]);

    useEffect(() => {
        setFavorite(noticesFavorites);
    }, [noticesFavorites]);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    const activeTabStyles = {
        mr: activeTab === 0 ? "10px" : 0,
        ml: activeTab === 1 ? "10px" : 0,
        backgroundColor: "var(--secondary-color)", textDecoration: "none", height: "46px", textTransform: 'capitalize', borderRadius: "30px", '&:hover': { backgroundColor: "#F9B020" },
        '&.MuiTab-root': {
            color: "var(--background-color)",
            fontWeight: 500,
            fontSize: "14px",
            textDecoration: 'none'
        },
        '&.MuiTouchRipple-root': {
            display: "none"
        }
    }
    const inactiveTabStyles = {
        textTransform: 'capitalize',
        backgroundColor: "var(--background-color)", color: "var(--primary-color)", borderRadius: "30px",
        '&.MuiTab-root': {

            fontWeight: 500,
            fontSize: "14px",
            textDecoration: 'none'
        },
    }
    return (
        <Box sx={{
            [theme.breakpoints.up('lg')]: {
                pt: "40px"
            },
        }}>
            <Tabs sx={{
                gap: "10px",
                textDecoration: 'none', mb: "20px", '& .MuiTabs-indicator': {
                    display: 'none',
                }, "& .MuiTabs- flexContainer": {

                }
            }} value={activeTab} onChange={handleTabChange}>

                <Tab label="My favorite pets" sx={activeTab === 0 ? activeTabStyles : inactiveTabStyles} />
                <Tab label="Viewed" ml="8px" sx={activeTab === 1 ? activeTabStyles : inactiveTabStyles} />
            </Tabs>
            {activeTab === 0 ? (
                favorite.length > 0 ? (<Box sx={{
                    [theme.breakpoints.up('lg')]: {

                    },
                }}>
                    <NoticesList props={favorite} /></Box>
                ) : (
                    <Typography sx={{
                        mt: "80px", mb: "140px",
                        fontWeight: 500,
                        fontSize: "14px", textAlign: "center", [theme.breakpoints.up("md")]: {
                            mt: "180px"
                        },
                    }}>
                        Oops,  <Typography component="span" sx={{
                            mt: "80px", mb: "140px",
                            fontWeight: 700,
                            fontSize: "14px",
                            color: "var(--secondary-color)",
                        }}> looks like there aren't any furries </Typography> on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.
                    </Typography>
                )
            ) : activeTab === 1 ? (<Box sx={{
                [theme.breakpoints.up('lg')]: {

                },
            }}>
                <NoticesList props={user.noticesViewed} /></Box>
            ) : null}
        </Box>
    );
};


export default MyNotices;