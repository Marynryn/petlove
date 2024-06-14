import React from 'react';
import { Box } from '@mui/material';

const CustomRadio = ({ selected, value, color, iconColor, icon, onChange, ...props }) => {
    const handleClick = () => {
        onChange(value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: selected ? iconColor : color,
                p: "6px",
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                justifyContent: 'center',
                marginRight: 1,
                '&:hover': {
                    scale: "1.07"
                }
            }}
            onClick={handleClick}
            {...props}
        >
            <input
                type="radio"
                value={value}
                {...props}
                style={{ display: 'none' }}
            />
            {React.cloneElement(icon, {
                style: {
                    stroke: selected ? "white" : iconColor,
                    fill: selected ? color : 'transparent'
                }
            })}
        </Box>
    );
};

export default CustomRadio;
