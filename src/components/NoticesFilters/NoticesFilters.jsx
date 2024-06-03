import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import sprite from '../../img/svg/symbol-defs.svg';
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
import { Box, IconButton, Paper } from '@mui/material';
import Btn from 'components/Button/Button';


const NoticesFilters = ({ onSearch }) => {
    const [reset, setReset] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const dispatch = useDispatch();
    const categories = useSelector(selectGetCategories);
    const sex = useSelector(selectGetSex);
    const species = useSelector(selectGetSpecies);
    const locations = useSelector(selectGetLocations);

    const filter = useSelector(selectGetNoticesFilter);


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
        setSelectedLocation(selectedOption);
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
        onSearch('');
        setReset(true);
        setTimeout(() => setReset(false), 0);
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
            maxHeight: "216px",
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '216px !important',
            "::-webkit-scrollbar": {
                width: '8px',
                height: '100px',
                paddingTop: '10px',
            },
            "::-webkit-scrollbar-thumb": {
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '10px',

            },
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
            <Box sx={{ display: "flex", mt: "4px", mb: "12px", gap: "8px", width: "100%" }}>
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
                value={getSelectedOption(filter.species, createOptions(species))}
                placeholder="By type"

            />
            <Box mt="12px" sx={{ position: "relative" }}>
                <AsyncSelect
                    styles={{
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


                        }),
                        indicatorSeparator: (provided) => ({
                            ...provided,
                            display: 'none'

                        }),
                        indicatorContainer: (provided) => ({
                            ...provided,


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
                            display: 'none'
                        }),
                        menu: (provided) => ({
                            ...provided,
                            borderRadius: "14px",
                            padding: " 12px ",
                            maxHeight: "216px",
                        }),
                        menuList: (provided) => ({
                            ...provided,
                            height: '94px ',
                            "::-webkit-scrollbar": {
                                width: '8px',
                                height: '100px',
                                paddingTop: '10px',
                            },
                            "::-webkit-scrollbar-thumb": {
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: '10px',

                            },
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            textTransform: 'capitalize',
                            color: state.isFocused ? 'var(--secondary-color)' : "rgba(38, 38, 38, 0.60)",
                            backgroundColor: state.isFocused ? 'transparent' : 'transparent',
                            padding: "0 12px 8px 12px",
                            fontSize: "14px",
                            fontWeight: 500,
                        })
                    }}
                    loadOptions={loadLocationOptions}
                    onChange={handleLocationChange}
                    value={selectedLocation}
                    placeholder="Location"
                    isClearable
                />
                <IconButton type="submit" sx={{ position: 'absolute', right: '12px', p: 0, top: '12px' }}>
                    <svg width={18} height={18} style={{ stroke: 'var(--primary-color)', fill: 'white' }}>
                        <use href={`${sprite}#icon-search`}></use>
                    </svg>
                </IconButton></Box>
            <Box sx={{ my: "20px", width: "100%", height: " 1px", backgroundColor: "rgba(38, 38, 38, 0.10)" }}></Box>
            <SelectedValues reset={reset} />
            <Btn onClick={handleResetFilters} bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"} type={"reset"}>Reset</Btn>
        </Paper>

    );
};

export default NoticesFilters;
