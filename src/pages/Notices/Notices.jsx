import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesList from 'components/NoticesList/NoticesList';
import ServerPagination from 'components/ServerPagination/ServerPagination';
import Title from 'components/Title/Title';
import { getNotices, getCategories, getSex, getSpecies, getLocations } from 'store/operations';
import { setInputFilter } from 'store/reducer';
import { selectGetNotices, selectGetNoticesFilter, selectTotalPagesNotices } from 'store/selectors';

const Notices = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectGetNoticesFilter);
    const notices = useSelector(selectGetNotices);
    const totalPages = useSelector(selectTotalPagesNotices);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [filteredNotices, setFilteredNotices] = useState([]);
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSex());
        dispatch(getSpecies());
        dispatch(getLocations());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getNotices({ page: currentPage, perPage: itemsPerPage, filter }));
    }, [dispatch, currentPage, filter]);
    useEffect(() => {
        const applyFilter = () => {
            let filtered = notices;


            if (filter.gender) {
                filtered = filtered.filter(notice => notice.sex === filter.gender);
            }

            setFilteredNotices(filtered);
        };

        applyFilter();
    }, [notices, filter]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (searchTerm) => {
        dispatch(setInputFilter(searchTerm));
        setCurrentPage(1);
    };
    console.log(filteredNotices)
    return (
        <Box mt="60px">
            <Title>Find your favorite pet</Title>
            <NoticesFilters onSearch={handleSearch} />
            <NoticesList notices={filteredNotices} />
            {(filteredNotices.length > 6 || totalPages > 1) && (
                <ServerPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </Box>
    );
};

export default Notices;
