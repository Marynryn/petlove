import { Box } from '@mui/material';
import NewsList from 'components/NewsList/NewsList';
import SearchField from 'components/SearchField/SearchField';
import Title from 'components/Title/Title';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'store/operations';
import { selectGetFilter, selectGetNews } from 'store/selectors';

export const News = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectGetFilter);
    const news = useSelector(selectGetNews);

    useEffect(() => {
        dispatch(getNews(filter));
    }, [dispatch, filter])
    console.log(news)
    return (
        <Box sx={{ mt: "60px" }}>
            <Title>News</Title>
            <SearchField />
            <NewsList news={news} />
            {/* <Pagination /> */}
        </Box>
    )
}

export default News;