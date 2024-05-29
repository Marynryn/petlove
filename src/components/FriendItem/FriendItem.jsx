import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactInfo from 'components/ContactInfo/ContactInfo';

const FriendItem = ({ props }) => {

    const today = new Date().getDay();

    const todayWorkDay = props.workDays && props.workDays.length > 0 ? props.workDays[today] : null;

    const styles = {
        display: 'flex',
        justifyContent: 'end',
        color: 'var(--secondary-color)',
        fontWeight: 500,
        fontSize: "12px",
    }
    return (
        <Box sx={{ height: "auto", bgcolor: "var(--background-color)", minWidth: "248px", width: "100%", borderRadius: "15px", p: "12px 12px 40px 20px" }}>

            {todayWorkDay ? (
                <Box
                    sx={styles}
                >

                    {todayWorkDay.isOpen ? (
                        <Typography variant="body2" p="8px" sx={{ borderRadius: "30px", backgroundColor: " #FFF4DF", }}>{todayWorkDay.from} - {todayWorkDay.to}</Typography>
                    ) : (
                        <Typography variant="body2" p="8px" sx={{ borderRadius: "30px", backgroundColor: " #FFF4DF", }}>Closed</Typography>
                    )}
                </Box>
            ) : (
                <Box
                    sx={styles}
                >
                    <Typography variant="body2" p="8px" sx={{ borderRadius: "30px", backgroundColor: " #FFF4DF", }}>Day and night</Typography></Box>
            )}

            <Box sx={{ display: "flex", gap: "14px", }}>
                <Box>
                    <img src={props.imageUrl} alt={props.title} style={{ width: "80px", height: "80px", borderRadius: "15px" }} />
                </Box>
                <Box sx={{ minWidth: "135px" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: "14px" }}>{props.title}</Typography>
                    <ContactInfo props={props} />
                </Box>
            </Box>

            <Box sx={{ mt: "20px" }}>

            </Box>
        </Box>
    );
};

export default FriendItem;
