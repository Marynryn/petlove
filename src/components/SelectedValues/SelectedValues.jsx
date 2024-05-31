import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularFilter, setPriceFilter } from 'store/reducer';
import { selectGetNoticesFilter } from 'store/selectors';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const SelectedValues = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectGetNoticesFilter);

    const handlePopularChange = (value) => {
        dispatch(setPopularFilter(value));
    };

    const handlePriceChange = (value) => {
        dispatch(setPriceFilter(value));
    };

    const clearPopularFilter = () => {
        dispatch(setPopularFilter(''));
    };

    const clearPriceFilter = () => {
        dispatch(setPriceFilter(''));
    };

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center">
                <Button
                    variant={filter.popular === 'popular' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => handlePopularChange(true)}
                >
                    Popular
                </Button>
                {filter.popular === 'popular' && (
                    <IconButton onClick={clearPopularFilter} size="small" sx={{ ml: 1 }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
                <Button
                    variant={filter.popular === 'unpopular' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => handlePopularChange(false)}
                    sx={{ ml: 2 }}
                >
                    Unpopular
                </Button>
                {filter.popular === 'unpopular' && (
                    <IconButton onClick={clearPopularFilter} size="small" sx={{ ml: 1 }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
            <Box display="flex" alignItems="center">
                <Button
                    variant={filter.price === 'cheap' ? 'contained' : 'outlined'}
                    color="secondary"
                    onClick={() => handlePriceChange(true)}
                >
                    Cheap
                </Button>
                {filter.price === 'cheap' && (
                    <IconButton onClick={clearPriceFilter} size="small" sx={{ ml: 1 }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
                <Button
                    variant={filter.price === 'expensive' ? 'contained' : 'outlined'}
                    color="secondary"
                    onClick={() => handlePriceChange(false)}
                    sx={{ ml: 2 }}
                >
                    Expensive
                </Button>
                {filter.price === 'expensive' && (
                    <IconButton onClick={clearPriceFilter} size="small" sx={{ ml: 1 }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
};

export default SelectedValues;

