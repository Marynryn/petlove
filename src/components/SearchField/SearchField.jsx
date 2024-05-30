import { Box, TextField, IconButton, Paper } from "@mui/material";
import { useState } from "react";

import sprite from '../../img/svg/symbol-defs.svg';


const SearchField = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearInput = () => {
        setSearchTerm('');
        onSearch('');
    };

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };
    const style = {

        '& .MuiOutlinedInput-root': {
            borderRadius: "30px",
            margin: "0",
        },

    }
    return (

        <Paper component="form" onSubmit={handleSearch} sx={{ boxShadow: "none", backgroundColor: "var(--background-gray)" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: "4px", mb: "38px", borderRadius: "30px", position: "relative" }}>
                <TextField
                    sx={style}
                    id="name"
                    InputLabelProps={{ shrink: false }}
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search"
                    fullWidth
                    margin="normal"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
                {searchTerm && (
                    <IconButton onClick={handleClearInput} sx={{ position: "absolute", right: "32px", p: 0, top: "35px" }}>
                        <svg width={18} height={18} style={{
                            stroke: '#EF2447', fill: "#EF2447"
                        }}>
                            <use href={`${sprite}#icon-x`}></use>
                        </svg>
                    </IconButton>
                )}
                <IconButton type="submit" sx={{ position: "absolute", right: "12px", p: 0, top: "35px" }}>
                    <svg width={18} height={18} style={{ stroke: 'var(--primary-color)', fill: " white", }}>
                        <use href={`${sprite}#icon-search`}></use>
                    </svg>
                </IconButton>
            </Box>
        </Paper>

    );
};

export default SearchField;
