import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import NoticesList from 'components/NoticesList/NoticesList';


const MyNotices = ({ props }) => {
    const [activeTab, setActiveTab] = useState(0);
    console.log(props.noticesViewed)
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
            <Tabs sx={{ display: "flex", gap: "10px", textDecoration: 'none' }} value={activeTab} onChange={handleTabChange}>
                <Tab label="My favorite pets" sx={activeTab === 0 ? activeTabStyles : inactiveTabStyles} />
                <Tab label="Viewed" sx={activeTab === 1 ? activeTabStyles : inactiveTabStyles} />
            </Tabs>
            {activeTab === 0 && <NoticesList props={props.noticesFavorites} />}
            {activeTab === 1 && <NoticesList props={props.noticesViewed} />}
        </Box>
    );
};


export default MyNotices;