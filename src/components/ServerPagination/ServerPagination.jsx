import React from 'react';
import { Box, IconButton } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ServerPagination = ({ totalPages, currentPage, onPageChange }) => {
    const handleFirstPage = () => onPageChange(1);
    const handlePreviousPage = () => onPageChange(currentPage - 1);
    const handleNextPage = () => onPageChange(currentPage + 1);
    const handleLastPage = () => onPageChange(totalPages);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const buttonStyle = {
        borderRadius: '100%',
        border: '1px solid rgba(38, 38, 38, 0.20)',
        width: '38px',
        height: '38px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        '@media (max-width: 320px)': {
            width: '34px',
            height: '34px',
        },
    };
    const activeButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        borderRadius: '100%',
        border: '1px solid',
        width: '38px',
        height: '38px',
        '@media (max-width: 320px)': {
            width: '34px',
            height: '34px',
        },
        borderColor: "var(--secondary-color)",
        backgroundColor: 'var(--secondary-color)',

        color: "var(--background-color)",
    };
    const pageNumbers = [currentPage];
    if (currentPage < totalPages) {
        pageNumbers.push(currentPage + 1);
    }
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '26px', gap: "6px", width: "334px", '@media (max-width: 320px)': {
                width: '280px',
                gap: "4px",
            },
        }}>
            <IconButton sx={buttonStyle} onClick={handleFirstPage} disabled={isFirstPage}>
                <KeyboardDoubleArrowLeftIcon sx={{ p: "8px", minWidth: "18px", '@media (max-width: 320px)': { p: "6px" }, }} />
            </IconButton>
            <IconButton sx={buttonStyle} onClick={handlePreviousPage} disabled={isFirstPage}>
                <ChevronLeftIcon sx={{ p: "8px", '@media (max-width: 320px)': { p: "6px" }, }} />
            </IconButton>
            <Box mx="5px" sx={{ display: "flex", gap: "10px", '@media (max-width: 320px)': { gap: "6px", mx: 0 }, }}>
                {pageNumbers.map((pageNumber, index) => (
                    <Box key={index} sx={pageNumber === currentPage ? activeButtonStyle : buttonStyle} mx={0} onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </Box>
                ))}
                <Box sx={buttonStyle} >
                    ...
                </Box></Box>
            <IconButton sx={buttonStyle} onClick={handleNextPage} disabled={isLastPage}>
                <ChevronRightIcon sx={{ p: "8px", '@media (max-width: 320px)': { p: "6px" }, }} />
            </IconButton>
            <IconButton sx={buttonStyle} onClick={handleLastPage} disabled={isLastPage}>
                <KeyboardDoubleArrowRightIcon sx={{ p: "8px", '@media (max-width: 320px)': { p: "6px" }, }} />
            </IconButton>
        </Box>
    );
};

export default ServerPagination;



