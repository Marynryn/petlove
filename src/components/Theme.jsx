import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 375,
            md: 768,
            lg: 1280,
        }
    }, typography: {
        fontFamily: '"Manrope", sans-serif',
    },

})
export default theme;
// sx = {{
//     backgroundColor: 'red',
//       [theme.breakpoints.up('sm')]: {
//         backgroundColor: 'blue',
//             },  
//     [theme.breakpoints.up('md')]: {
//         backgroundColor: 'green',
//             },
//     [theme.breakpoints.up('lg')]: {
//         backgroundColor: 'yellow',
//             },}}