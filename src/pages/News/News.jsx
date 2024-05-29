import { Box } from '@mui/material';
import NewsList from 'components/NewsList/NewsList';
import SearchField from 'components/SearchField/SearchField';
import Title from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ServerPagination from 'components/ServerPagination/ServerPagination';
import { getNews } from 'store/operations';
import { selectGetFilter, selectGetNews, selectTotalPages } from 'store/selectors';

export const News = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectGetFilter);
    const news = useSelector(selectGetNews);
    const totalPages = useSelector(selectTotalPages);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(getNews({ filter, page: currentPage, perPage: itemsPerPage }));
    }, [dispatch, filter, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Box sx={{ mt: "60px" }}>
            <Title>News</Title>
            <SearchField />
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
