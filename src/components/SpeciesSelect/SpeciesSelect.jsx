import Select from 'react-select';
import { Box, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const SpeciesSelect = ({ species, selectedSpecies, setSelectedSpecies }) => {
    const { setValue, formState: { errors } } = useFormContext();

    const createOptions = (options) => [
        ...options.map(option => ({ value: option, label: option }))
    ];
    const style = {
        control: (provided, state) => ({
            ...provided,
            cursor: 'default',
            width: "100%",
            color: "var(--primary-color)",
            height: "42px",
            borderRadius: '30px',
            border: species ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',

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
            maxHeight: "78px",
            m: 0,
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '78px ',
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
            padding: '4px 0',
            textTransform: 'capitalize',
            color: state.isFocused ? 'var(--secondary-color)' : "rgba(38, 38, 38, 0.60)",
            backgroundColor: state.isFocused ? 'transparent' : 'transparent',

        })
    }
    return (
        <Box>
            <Select
                styles={style}
                options={createOptions(species)}
                placeholder="Type of pet"
                value={species.find(option => option.value === selectedSpecies)}
                onChange={option => {
                    setSelectedSpecies(option.value);
                    setValue('species', option.value);
                }}
            />
            {errors.species && <Typography sx={{ fontSize: "10px" }} color="error">{errors.species.message}</Typography>}
        </Box>
    );
};
export default SpeciesSelect;