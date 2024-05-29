import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const ContactInfo = ({ props }) => {
    const contactLinkStyle = {

        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        color: 'var(--primary-color)',
        '&:hover': {
            color: 'blue',
        },
    };

    const styles = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '-0.28px',
        color: 'rgba(38, 38, 38, 0.50)',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        mb: '8px',

    };

    const containerStyles = {

        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        width: '100%',
    };

    const fallbackTextStyle = {
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '-0.28px',
        color: 'var(--primary-color)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    };

    return (
        <Box sx={containerStyles}>
            {props.email ? (
                <Typography sx={styles}>
                    Email:&nbsp;
                    <Link href={`mailto:${props.email}`} sx={contactLinkStyle}>
                        {props.email}
                    </Link>
                </Typography>
            ) : (
                <Typography sx={styles}>Email:&nbsp;<span style={fallbackTextStyle}>address only</span></Typography>
            )}
            {props.address && props.addressUrl ? (
                <Typography sx={styles}>
                    Address:&nbsp;
                    <Link href={props.addressUrl} target="_blank" rel="noopener" sx={contactLinkStyle}>
                        {props.address}
                    </Link>
                </Typography>
            ) : (
                <Typography sx={styles}>Address:&nbsp;<span style={fallbackTextStyle}>website only</span></Typography>
            )}
            {props.phone ? (
                <Typography sx={styles}>
                    Phone:&nbsp;
                    <Link href={`tel:${props.phone}`} sx={contactLinkStyle}>
                        {props.phone}
                    </Link>
                </Typography>
            ) : (
                <Typography sx={styles}>Phone:&nbsp;<span style={fallbackTextStyle}>email only</span></Typography>
            )}
        </Box>
    );
};

export default ContactInfo;
