import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactInfo from 'components/ContactInfo/ContactInfo';
import theme from 'components/Theme';

const FriendItem = ({ props }) => {

    const today = new Date().getDay();

    const todayWorkDay = props.workDays && props.workDays.length > 0 ? props.workDays[today] : null;

    const styles = {
        display: 'flex',
        justifyContent: 'end',
        color: 'var(--secondary-color)',
        fontWeight: 400,
        fontSize: "12px",
    }
    return (
        <Box sx={{
            bgcolor: "var(--background-color)", minWidth: "248px", width: "100%", borderRadius: "15px", p: "12px 12px 30px 20px", [theme.breakpoints.up("md")]: {

            },
        }}>

            {todayWorkDay ? (
                <Box
                    sx={styles}
                >

                    {todayWorkDay.isOpen ? (
                        <Typography p="8px" sx={{ borderRadius: "30px", fontSize: "12px", backgroundColor: " #FFF4DF", }}>{todayWorkDay.from} - {todayWorkDay.to}</Typography>
                    ) : (
                        <Typography p="8px" sx={{ borderRadius: "30px", fontSize: "12px", backgroundColor: " #FFF4DF", }}>Closed</Typography>
                    )}
                </Box>
            ) : (
                <Box
                    sx={styles}
                >
                    <Typography p="8px" sx={{ borderRadius: "30px", backgroundColor: " #FFF4DF", fontSize: "12px" }}>Day and night</Typography></Box>
            )}

            <Box sx={{ display: "flex", gap: "14px", }}>
                <Box>
                    <Box component="img" src={props.imageUrl} alt={props.title} sx={{ width: "80px", height: "80px", borderRadius: "15px", [theme.breakpoints.up("md")]: { width: "90px", height: "90px" } }} />
                </Box>
                <Box sx={{ minWidth: "135px" }}>
                    <Typography sx={{
                        fontWeight: 700, fontSize: "16px", mb: "14px", [theme.breakpoints.up("md")]: {
                            mb: "20px", fontSize: "18px",
                        },
                    }}>{props.title}</Typography>
                    <ContactInfo props={props} />
                </Box>
            </Box>


        </Box>
    );
};

export default FriendItem;
