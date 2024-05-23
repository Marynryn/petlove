import { Box } from "@mui/material";

const ErrorBubble = ({ message }) => {

    if (/ must be a `date` type/i.test(message)) {
        message = "Date of birth is required";
    }
    const style = {
        position: "absolute",
        top: "0",
        color: "red",

    }

    return (
        <Box sx={{ style }}>
            {message}
        </Box>
    );
};
export default ErrorBubble;
