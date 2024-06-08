import DatePicker from 'react-datepicker';
import { Box, TextField } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDateRevers } from 'helpers/formatDate';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import sprite from '../../img/svg/symbol-defs.svg';
registerLocale('en-GB', enGB);

const BirthdayPicker = ({ formData, setFormData }) => {
    const datePickerRef = useRef(null);
    const { setValue, register, formState: { errors } } = useFormContext();


    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };
    const handleBirthdayChange = (date) => {
        const formattedDate = formatDateRevers(date);
        setFormData({ ...formData, birthday: formattedDate });
        setValue('birthday', formattedDate);
    };

    return (<Box sx={{ position: "relative" }}>
        <DatePicker
            selected={formData.birthday ? new Date(formData.birthday) : null}
            onChange={handleBirthdayChange}
            customInput={<TextField sx={{
                mt: 0,
                mb: 0,
                '& .MuiOutlinedInput-root': {
                    borderRadius: "30px",
                    '& fieldset': {
                        border: formData.birthday ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
                    },
                    '&:hover fieldset': {
                        borderColor: 'var(--secondary-color)',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'var(--secondary-color)',
                    },

                },


                '& .MuiOutlinedInput-input': {
                    padding: "12px",
                    height: "18px",
                    fontSize: "14px",
                    fontWeight: 500,
                },
                '& .MuiFormHelperText-root': {
                    height: "12px",
                    margin: 0,
                    fontSize: "10px",
                    color: "#EF2447",
                },
            }}
                placeholder='00.00.0000'
                error={!!errors.birthday}
                helperText={errors.birthday?.message}
                {...register('birthday')}
            />}
            locale="en-GB"
            placeholderText='00.00.0000'
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            ref={datePickerRef}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
        />
        <svg onClick={handleIconClick} style={{ position: "absolute", right: "12px", top: "12px" }} width={18} height={18}>
            <use href={`${sprite}#icon-Button`} style={{ fill: "white", stroke: "black" }} />
        </svg></Box>
    );
};

export default BirthdayPicker;