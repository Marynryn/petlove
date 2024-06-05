import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import NoticesList from 'components/NoticesList/NoticesList';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserFull } from 'store/operations';
import { selectNoticeFavoriteFullInfo, selectUser } from 'store/selectors';


const MyNotices = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [favorite, setFavorite] = useState([]);
    const dispatch = useDispatch();
    const noticesFavorites = useSelector(selectNoticeFavoriteFullInfo)
    const user = useSelector(selectUser)
    useEffect(() => {
        dispatch(currentUserFull());
    }, [dispatch]);

    useEffect(() => {
        setFavorite(noticesFavorites);
    }, [noticesFavorites]);
    console.log(favorite)
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    const activeTabStyles = {
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
        <Box>
            <Tabs sx={{
                textDecoration: 'none', mb: "20px", '& .MuiTabs-indicator': {
                    display: 'none',
                }, "& .MuiTabs- flexContainer": {
                    gap: "10px",
                }
            }} value={activeTab} onChange={handleTabChange}>
                <Tab label="My favorite pets" sx={activeTab === 0 ? activeTabStyles : inactiveTabStyles} />
                <Tab label="Viewed" ml={8} sx={activeTab === 1 ? activeTabStyles : inactiveTabStyles} />
            </Tabs>
            {activeTab === 0 && <NoticesList props={favorite} />}
            {activeTab === 1 && <NoticesList props={user.noticesViewed} />}
        </Box>
    );
};


export default MyNotices;