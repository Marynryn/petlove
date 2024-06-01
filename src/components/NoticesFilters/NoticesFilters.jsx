import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

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
import SelectedValues from 'components/SelectedValues/SelectedValues';
import { Box, Paper } from '@mui/material';


const NoticesFilters = ({ onSearch }) => {

    const [selectedLocation, setSelectedLocation] = useState(null);

    const dispatch = useDispatch();



    const categories = useSelector(selectGetCategories);
    const sex = useSelector(selectGetSex);
    const species = useSelector(selectGetSpecies);
    const locations = useSelector(selectGetLocations);

    const filter = useSelector(selectGetNoticesFilter);
    console.log(filter);
    const [selectedValues, setSelectedValues] = useState({
        inputFilter: "",
        category: '',
        gender: '',
        species: '',
        location: '',
        popular: null,
        price: null,
    });
    const handleCategoryChange = (selectedOption) => {
        dispatch(setCategoryFilter(selectedOption ? selectedOption.value : ""));
    };

    const handleGenderChange = (selectedOption) => {
        dispatch(setGenderFilter(selectedOption ? selectedOption.value : ""));
    };

    const handlePetTypeChange = (selectedOption) => {
        dispatch(setPetTypeFilter(selectedOption ? selectedOption.value : ""));
    };

    const handleLocationChange = (selectedOption) => {
        dispatch(setLocationFilter(selectedOption ? selectedOption.value : ""));
    };

    const handleRemoveFilter = (filterType) => {
        setSelectedValues(prev => ({ ...prev, [filterType]: '' }));
        dispatch(setCategoryFilter(''));
        dispatch(setGenderFilter(''));
        dispatch(setPetTypeFilter(''));
        dispatch(setLocationFilter(''));
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
        setSelectedValues({
            category: '',
            gender: '',
            species: '',
            location: '',
            popular: null,
            price: null,
        });
        onSearch('');
    };

    const createOptions = (options) => [
        { value: '', label: 'Show All' },
        ...options.map(option => ({ value: option, label: option }))
    ];
    const getSelectedOption = (value, options) => {
        return options.find(option => option.value === value) || null;
    };
    const loadLocationOptions = (inputValue, callback) => {

        const filteredLocations = locations.filter(location =>
            location.cityEn.toLowerCase().includes(inputValue.toLowerCase())
        );

        filteredLocations.sort((a, b) => a.cityEn.localeCompare(b.cityEn));
        const options = filteredLocations.map(location => ({
            value: location._id,
            label: `${location.cityEn}, ${location.stateEn}`
        }));
        callback(options);
    };
    const style = {
        control: (provided, state) => ({
            ...provided,
            cursor: 'default',
            width: "100%",
            color: "var(--primary-color)",
            height: "42px",
            borderRadius: '30px',
            border: 'none',

        }),
        singleValue: (provided) => ({
            ...provided,
            color: "var(--primary-color)",
            textTransform: 'capitalize',
            paddingLeft: "2px",
            fontSize: "14px",
            fontWeight: 500,
        }),
        ValueContainer: (provided) => ({
            ...provided,

        }),
        input: (provided) => ({
            ...provided,
            display: 'none'

        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none'

        }),
        indicatorContainer: (provided) => ({
            ...provided,
            display: 'none'

        }),
        container: (provided) => ({
            ...provided,
            width: "100%"

        }),
        placeholder: (provided) => ({
            ...provided,
            color: "var(--primary-color)",
            fontSize: "14px",
            fontWeight: 500,

            paddingLeft: "2px",
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: "var(--primary-color)"
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "14px",
            padding: "0 12px ",
        }),
        MenuList: (provided) => ({
            ...provided,


        }),
        option: (provided, state) => ({
            ...provided,
            textTransform: 'capitalize',
            color: state.isFocused ? 'var(--secondary-color)' : "rgba(38, 38, 38, 0.60)",
            backgroundColor: state.isFocused ? 'transparent' : 'transparent',

        })
    }
    return (
        <Paper component="form" onReset={handleResetFilters} sx={{ color: "var(--primary-color)", p: "20px", pt: "4px", my: "40px", boxShadow: 'none', backgroundColor: '#FFF4DF', borderRadius: '30px', }}>
            <SearchField onSearch={onSearch} onReset={handleResetFilters} bgColor={"var(--background-color)"} />
            <Box sx={{ display: "flex", mt: "12px", mb: "12px", gap: "8px", width: "100%" }}>
                <Select
                    styles={style}
                    options={createOptions(categories)}
                    onChange={handleCategoryChange}
                    value={getSelectedOption(filter.category, createOptions(categories))}
                    placeholder="Category"

                />
                <Select
                    styles={style}

                    options={createOptions(sex)}
                    onChange={handleGenderChange}
                    value={getSelectedOption(filter.gender, createOptions(sex))}
                    placeholder="By gender"

                /></Box>
            <Select
                styles={style}
                options={createOptions(species)}
                onChange={handlePetTypeChange}
                value={getSelectedOption(filter.petType, createOptions(species))}
                placeholder="By type"

            />
            <Box mt="12px">
                <AsyncSelect
                    styles={style}
                    loadOptions={loadLocationOptions}
                    onChange={handleLocationChange}
                    value={selectedLocation}
                    placeholder="Location"
                    isClearable
                /></Box>
            <Box sx={{ my: "20px", width: "100%", height: " 1px", backgroundColor: "rgba(38, 38, 38, 0.10)" }}></Box>
            <SelectedValues
                values={selectedValues}
                onRemove={handleRemoveFilter}
            />
            <button type="reset">Reset</button>
        </Paper>

    );
};

export default NoticesFilters;
