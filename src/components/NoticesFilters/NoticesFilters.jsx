import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
    getCategories,
    getSex,
    getSpecies,
    getLocations,
} from 'store/operations';
import {
    selectGetCategories,
    selectGetSex,
    selectGetSpecies,
    selectGetLocations,
    selectGetNoticesFilter
} from 'store/selectors';
import SearchField from 'components/SearchField/SearchField';
import {
    setCategoryFilter,
    setGenderFilter,
    setPetTypeFilter,
    setLocationFilter,
    resetFilters,
} from 'store/reducer';

const NoticesFilters = ({ onSearch }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSex());
        dispatch(getSpecies());
        dispatch(getLocations());
    }, [dispatch]);

    const categories = useSelector(selectGetCategories) || [];
    const sex = useSelector(selectGetSex) || [];
    const species = useSelector(selectGetSpecies) || [];
    const locations = useSelector(selectGetLocations) || [];

    const filter = useSelector(selectGetNoticesFilter);

    const handleCategoryChange = (selectedOption) => {
        dispatch(setCategoryFilter(selectedOption || ""));
    };

    const handleGenderChange = (selectedOption) => {
        dispatch(setGenderFilter(selectedOption || ""));
    };

    const handlePetTypeChange = (selectedOption) => {
        dispatch(setPetTypeFilter(selectedOption || ""));
    };

    const handleLocationChange = (selectedOption) => {
        dispatch(setLocationFilter(selectedOption || ""));
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
        onSearch('');
    };

    const createOptions = (options) => [
        'Show All',
        ...options
    ];

    const getSelectedOption = (value, options) => {
        return value && options.includes(value) ? value : 'Show All';
    };

    return (
        <form onReset={handleResetFilters}>
            <SearchField onSearch={onSearch} />
            <Select
                options={createOptions(categories).map(option => ({ value: option, label: option }))}
                onChange={(selectedOption) => handleCategoryChange(selectedOption.value)}
                value={{ value: getSelectedOption(filter.category, categories), label: getSelectedOption(filter.category, categories) }}
                placeholder="Select Category"
                isClearable
            />
            <Select
                options={createOptions(sex).map(option => ({ value: option, label: option }))}
                onChange={(selectedOption) => handleGenderChange(selectedOption.value)}
                value={{ value: getSelectedOption(filter.gender, sex), label: getSelectedOption(filter.gender, sex) }}
                placeholder="Select Gender"
                isClearable
            />
            <Select
                options={createOptions(species).map(option => ({ value: option, label: option }))}
                onChange={(selectedOption) => handlePetTypeChange(selectedOption.value)}
                value={{ value: getSelectedOption(filter.petType, species), label: getSelectedOption(filter.petType, species) }}
                placeholder="Select Pet Type"
                isClearable
            />
            {/* <Select
                options={createOptions(locations).map(option => ({ value: option, label: option }))}
                onChange={(selectedOption) => handleLocationChange(selectedOption.value)}
                value={{ value: getSelectedOption(filter.location, locations), label: getSelectedOption(filter.location, locations) }}
                placeholder="Select Location"
                isClearable
            /> */}
            <button type="reset">Reset</button>
        </form>
    );
};

export default NoticesFilters;
