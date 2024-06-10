import { Box } from '@mui/material';
import NewsList from 'components/NewsList/NewsList';
import SearchField from 'components/SearchField/SearchField';
import Title from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ServerPagination from 'components/ServerPagination/ServerPagination';
import { getNews } from 'store/operations';
import { selectGetFilter, selectGetNews, selectTotalPages } from 'store/selectors';
import { setFilter } from 'store/reducer';
import theme from 'components/Theme';

export const News = ({ onSearch }) => {
    const dispatch = useDispatch();
    const filter = useSelector(selectGetFilter);
    const news = useSelector(selectGetNews);
    const totalPages = useSelector(selectTotalPages);
    console.log(news)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(getNews({ filter, page: currentPage, perPage: itemsPerPage }));
    }, [dispatch, filter, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleSearch = (searchTerm) => {
        dispatch(setFilter(searchTerm));
        setCurrentPage(1);
    };
    return (
        <Box sx={{
            mt: "60px", [theme.breakpoints.up("md")]: {
                mt: "96px"
            },
            [theme.breakpoints.up("lg")]: {
                px: "32px", mt: "107px"
            },
        }}>
            <Box sx={{
                [theme.breakpoints.up("md")]: {
                    display: "flex",
                    justifyContent: "space-between",

                },
            }}>
                <Title>News</Title>
                <SearchField onSearch={handleSearch} /></Box>
            <NewsList news={news} />
            {totalPages > 1 && (
                <ServerPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </Box>
    );
};

export default News;
