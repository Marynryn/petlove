import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            s: 320,
            sm: 375,
            md: 768,
            lg: 1280,
        }
    }, typography: {
        fontFamily: '"Manrope", sans-serif',
    },

})
export default theme;
