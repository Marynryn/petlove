import React, { useEffect, useState } from 'react';
import { Box, TextField, IconButton, Paper } from '@mui/material';
import sprite from '../../img/svg/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import theme from 'components/Theme';


const SearchField = ({ onSearch, bgColor }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const isNoticesPage = location.pathname === '/notices';


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearInput = () => {
        setSearchTerm('');
        onSearch('');

    };
    useEffect(() => {
        if (onSearch) {
            setSearchTerm("");

        }
    }, [onSearch, setSearchTerm]);
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };
    const style = {
        mt: 0,
        mb: 0,
        '& .MuiOutlinedInput-root': {
            backgroundColor: `${bgColor}`,
            borderRadius: '30px',
            margin: '0',
            border: 'none',
            height: "42px",
            mt: 0,
            mb: 0, [theme.breakpoints.up("md")]: {
                height: "48px"
            },

        },
        '& .MuiFormControl-root.MuiTextField-root': {
            mt: 0,
            mb: 0
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: isNoticesPage ? "none" : "1px solid rgba(38, 38, 38, 0.15)",
        },
        '& .MuiInputBase-input': {
            m: 0,
            mt: 0,
            mb: 0,
            '&::placeholder': {
                opacity: isNoticesPage ? 1 : 0.8,
                color: isNoticesPage ? 'var(--primary-color)' : 'rgba(38, 38, 38, 0.50)',
                fontSize: '14px',
                fontWeight: 500,
            },
        },
    };
    return (
        <Paper component="div" sx={{ m: 0, boxShadow: 'none', backgroundColor: 'var(--background-gray)' }}>
            <Box sx={{
                display: 'flex', alignItems: 'center', mt: '4px', borderRadius: '30px', position: 'relative', [theme.breakpoints.up("md")]: {
                    m: 0
                },
            }}>
                <TextField
                    sx={style}
                    id="name"
                    InputLabelProps={{ shrink: false }}
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search"
                    fullWidth
                    margin="normal"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-Я]*)*$"
                />
                {searchTerm && (
                    <IconButton onClick={handleClearInput} sx={{
                        position: 'absolute', right: '32px', p: 0, top: '12px', [theme.breakpoints.up("md")]: {
                            top: '16px'

                        }
                    }} >
                        <svg width={18} height={18} style={{ stroke: '#EF2447', fill: '#EF2447' }}>
                            <use href={`${sprite}#icon-x`}></use>
                        </svg>
                    </IconButton>
                )}
                <IconButton type="submit" onClick={handleSearch} sx={{
                    position: 'absolute', right: '12px', p: 0, top: '12px', [theme.breakpoints.up("md")]: {
                        top: '16px'

                    }
                }}>
                    <svg width={18} height={18} style={{ stroke: 'var(--primary-color)', fill: 'white' }}>
                        <use href={`${sprite}#icon-search`}></use>
                    </svg>
                </IconButton>
            </Box>
        </Paper>
    );
};

export default SearchField;

