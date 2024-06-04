import React from 'react';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Stars = ({ popularity }) => {
    if (!popularity) {
        return null;
    }
    const maxStars = 5;
    const filledStars = Math.min(popularity, maxStars);

    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        stars.push(
            i <= filledStars ? (
                <StarIcon key={i} sx={{ color: 'rgba(255, 197, 49, 1)', fontSize: '16px', pr: '4px' }} />
            ) : (
                <StarBorderIcon key={i} sx={{ color: 'rgba(38, 38, 38, 0.05)', fontSize: '16px', pr: '4px' }} />
            )
        );
    }

    return <Box>{stars}</Box>;
};

export default Stars;


