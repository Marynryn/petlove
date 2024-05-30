import { Box } from '@mui/material';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesList from 'components/NoticesList/NoticesList';
import ServerPagination from 'components/ServerPagination/ServerPagination';
import Title from 'components/Title/Title';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from 'store/operations';
import { selectGetNotices, selectGetNoticesFilter, selectTotalPagesNotices } from 'store/selectors';


export const Notices = () => {
    const dispatch = useDispatch();
    // const filter = useSelector(selectGetFilter);
    const notices = useSelector(selectGetNotices);
    const totalPages = useSelector(selectTotalPagesNotices);
    console.log(notices)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(getNotices({ page: currentPage, perPage: itemsPerPage }));
    }, [dispatch, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleSearch = (searchTerm) => {

        dispatch(getNotices({ page: currentPage, perPage: itemsPerPage, searchTerm }));
        setCurrentPage(1);
    };
    return (
        <Box mt="60px">
            <Title>Find your favorite pet</Title>
            <NoticesFilters onSearch={handleSearch} />
            <NoticesList notices={notices} />
            {totalPages > 1 && (
                <ServerPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </Box>
    )
}
export default Notices;