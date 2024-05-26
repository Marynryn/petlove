import { Box, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFilter, setFilter } from "store/reducer";
import sprite from '../../img/svg/symbol-defs.svg';


const SearchField = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const handleChange = event => {
        setSearchText(event.target.value);
        dispatch(deleteFilter())
    };

    const handleClear = () => {
        setSearchText('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setFilter(searchText));
    };
    const style = {

        '& .MuiOutlinedInput-root': {
            borderRadius: "30px",
            margin: "0",
        },

    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: "4px", borderRadius: "30px", position: "relative" }}>
                    <TextField
                        sx={style}
                        id="name"
                        InputLabelProps={{ shrink: false }}
                        value={searchText}
                        onChange={handleChange}
                        placeholder="Search"
                        fullWidth
                        margin="normal"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    />
                    {searchText && (
                        <IconButton onClick={handleClear} sx={{ position: "absolute", right: "32px", p: 0, top: "35px" }}>
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
            </form>
        </Box>
    );
};

export default SearchField;
