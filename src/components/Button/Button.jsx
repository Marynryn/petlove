import { Button } from '@mui/material';
import theme from 'components/Theme';
import React from 'react';


const Btn = ({ children, onClick, type, bgColor, textColor }) => {

    const determineHoverColor = (bgColor) => {

        if (bgColor && bgColor.toLowerCase() === 'var(--secondary-color)') {
            return {
                backgroundColor: "#F9B020",
            };
        } else {
            return { backgroundColor: '#FBE7C1' };
        }
    };


    const hoverBgColor = determineHoverColor(bgColor);

    const style = {
        textTransform: 'capitalize',
        backgroundColor: bgColor,
        color: textColor,
        width: "100%",
        height: "42px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&:hover': hoverBgColor,
        '&:focus': hoverBgColor,
        [theme.breakpoints.up('md')]: {

            height: "48px"
        }
    };


    return (
        <Button onClick={onClick} sx={style} type={type}>
            {children}
        </Button>
    );
};

export default Btn;
