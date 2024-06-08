import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPopularFilter, setPriceFilter } from 'store/reducer';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const SelectedValues = ({ reset }) => {
    const dispatch = useDispatch();
    const [selectedFilters, setSelectedFilters] = useState({
        popular: null,
        price: null
    });

    useEffect(() => {
        if (reset) {
            setSelectedFilters({
                popular: null,
                price: null
            });
            dispatch(setPopularFilter(''));
            dispatch(setPriceFilter(''));
        }
    }, [reset, dispatch]);

    const handleFilterChange = (filterName, value) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterName]: value
        }));

        if (filterName === 'popular') {
            dispatch(setPopularFilter(value));
        } else if (filterName === 'price') {
            dispatch(setPriceFilter(value));
        }
    };

    const clearFilter = (filterName) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterName]: null
        }));

        if (filterName === 'popular') {
            dispatch(setPopularFilter(''));
        } else if (filterName === 'price') {
            dispatch(setPriceFilter(''));
        }
    };

    const buttonStyle = {
        borderRadius: '30px',
        p: "12px",
        height: "18px",
        border: "none",
        backgroundColor: '#FFFFFF',
        color: "var(--primary-color)"
    };

    const selectedButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'var(--secondary-color)',
        color: '#FFFFFF',
    };
    const getButtonStyle = (isSelected) => ({
        p: 0,
        textTransform: 'capitalize',
        height: "12px",
        fontSize: '14px',
        fontWeight: 500,
        color: isSelected ? '#FFFFFF' : "var(--primary-color)"
    });

    return (
        <Box display="flex" flexDirection="column" gap={2} mb="20px">
            <Box display="flex" alignItems="center" flexWrap="wrap" gap="10px">
                <Box sx={selectedFilters.popular === 'popular' ? selectedButtonStyle : buttonStyle}>
                    <Button
                        sx={getButtonStyle(selectedFilters.popular === 'popular')}
                        onClick={() => handleFilterChange('popular', 'popular')}
                    >
                        Popular
                    </Button>
                    {selectedFilters.popular === 'popular' && (
                        <IconButton onClick={() => clearFilter('popular')} size="small" sx={{ ml: "6px", p: 0, color: '#FFFFFF' }}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
                <Box sx={selectedFilters.popular === 'unpopular' ? selectedButtonStyle : buttonStyle}>
                    <Button
                        sx={getButtonStyle(selectedFilters.popular === 'unpopular')}
                        onClick={() => handleFilterChange('popular', 'unpopular')}
                    >
                        Unpopular
                    </Button>
                    {selectedFilters.popular === 'unpopular' && (
                        <IconButton onClick={() => clearFilter('popular')} size="small" sx={{ ml: "6px", p: 0, color: '#FFFFFF' }}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
                <Box sx={selectedFilters.price === "cheap" ? selectedButtonStyle : buttonStyle}>
                    <Button
                        sx={getButtonStyle(selectedFilters.price === "cheap")}
                        onClick={() => handleFilterChange('price', "cheap")}
                    >
                        Cheap
                    </Button>
                    {selectedFilters.price === "cheap" && (
                        <IconButton onClick={() => clearFilter('price')} size="small" sx={{ ml: "6px", p: 0, color: '#FFFFFF' }}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
                <Box sx={selectedFilters.price === "expensive" ? selectedButtonStyle : buttonStyle}>
                    <Button
                        sx={getButtonStyle(selectedFilters.price === "expensive")}
                        onClick={() => handleFilterChange('price', "expensive")}
                    >
                        Expensive
                    </Button>
                    {selectedFilters.price === "expensive" && (
                        <IconButton onClick={() => clearFilter('price')} size="small" sx={{ ml: "6px", p: 0, color: '#FFFFFF' }}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default SelectedValues;
