import sprite from '../../img/svg/symbol-defs.svg';
import Title from 'components/Title/Title';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, RadioGroup, TextField, Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { addMyPet, getSpecies } from 'store/operations';
import { petSchema } from 'schema/schema';
import CustomRadio from 'components/CustomRadio/CustomRadio';
import { uploadFile } from 'helpers/uploadFile';
import { selectGetSpecies } from 'store/selectors';
import Select from 'react-select';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDateRevers } from 'helpers/formatDate';

registerLocale('en-GB', enGB);


export const AddPetForm = () => {
    const fileInputRef = useRef(null);

    const species = useSelector(selectGetSpecies);
    // const [loading, setLoading] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [formData, setFormData] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');


    const [selectedSex, setSelectedSex] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        reresolver: yupResolver(petSchema)
    });
    useEffect(() => {
        dispatch(getSpecies());
    }, [dispatch])
    const onSubmit = async (data) => {
        setFormData(data)
        const petData = {
            name: data.name,
            sex: selectedSex,
            species: selectedSpecies.value,
            birthday: data.birthday,
            title: data.title,
            imgURL: avatarUrl,
        }
        console.log(petData);
        try {

            await dispatch(addMyPet(petData));


        } catch (error) {
            toast.error('Error adding pet: ' + error.message);
        } finally {
            toast.success('Pet added successfully!');
            navigate('/profile');
        }
    };
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const imageUrl = await uploadFile(file);
                console.log(imageUrl);
                setValue('imgURL', imageUrl);
                setAvatarUrl(imageUrl);
            } catch (error) {
                console.error('Error uploading file:', error.message);
            }
        }
    };
    const handleBirthdayChange = (e) => {

        const formattedDate = formatDateRevers(e);


        setFormData({ ...formData, birthday: formattedDate });
        setValue('birthday', formattedDate);
    };
    const datePickerRef = useRef(null);

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };
    const createOptions = (options) => [
        { value: '', label: 'Show All' },
        ...options.map(option => ({ value: option, label: option }))
    ];



    console.log(selectedSex);
    const handleBack = () => {
        navigate('/profile');
    };

    const boxStyle = {
        borderRadius: "30px",
        backgroundColor: "var(--background-color)",
        p: "28px 20px 20px",
        mt: "18px",
        mb: "40px"
    };
    const style = {
        control: (provided, state) => ({
            ...provided,
            cursor: 'default',
            width: "100%",
            color: "var(--primary-color)",
            height: "42px",
            borderRadius: '30px',
            border: formData.species ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',

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
        <Box sx={boxStyle}>
            <Box sx={{ display: "flex", alignItems: "center", gap: '8px', mb: "24px" }}>
                <Title>Add my pet /</Title>
                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "rgba(43, 43, 42, 0.4)"
                }}>Personal details</Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RadioGroup row {...register('sex')}>
                    <CustomRadio
                        selected={selectedSex === 'female'}
                        onChange={() => setSelectedSex('female')}
                        value="female"
                        color={"rgba(244, 63, 94, 0.1)"}
                        iconColor={
                            " rgba(244, 63, 94, 1)"}
                        icon={
                            <svg width={20} height={20}>
                                <use href={`${sprite}#icon-female`} />
                            </svg>
                        }

                    />
                    <CustomRadio
                        selected={selectedSex === 'male'}
                        onChange={() => setSelectedSex('male')}
                        value="male"
                        color={"rgba(244, 63, 94, 0.10)"}
                        iconColor={"rgba(84, 173, 255, 1)"}
                        icon={
                            <svg width={20} height={20}>
                                <use href={`${sprite}#icon-male`} />
                            </svg>
                        }

                    />

                    <CustomRadio
                        selected={selectedSex === 'multiple'}
                        onChange={() => setSelectedSex('multiple')}
                        value="multiple"
                        color={"#FFF4DF"}
                        iconColor={"var(--secondary-color)"}
                        icon={
                            <svg width={20} height={20}>
                                <use href={`${sprite}#icon-healthicons_sexual-reproductive-health`} />
                            </svg>
                        }

                    />
                </RadioGroup>
                {errors.sex && <Typography color="error">{errors.sex.message}</Typography>}
                {avatarUrl === "" ? (
                    <Box sx={{ width: "68px", height: "68px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", textAlign: 'center', mt: "8px", mb: "16px" }}>
                        <svg width={34} height={34} style={{ padding: "17px", }}>
                            <use href={`${sprite}#icon-icons8_cat-footprint`} style={{ fill: "var(--secondary-color)" }} ></use>
                        </svg>
                    </Box>
                ) : (
                    <Box sx={{ width: "68px", height: "68px", mx: "auto", borderRadius: "100%", textAlign: 'center', mt: "20px", mb: "12px" }}>
                        <img src={avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                    </Box>
                )}
                <Box sx={{ display: "flex", gap: "8px", mb: "10px", }}>
                    <TextField
                        sx={{
                            mt: 0,
                            mb: 0,
                            width: "160px",
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "30px",
                                '& fieldset': {
                                    border: avatarUrl ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
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
                                height: "16px",
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
                        placeholder="Enter URL"
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Box sx={{ height: "42px" }}>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <IconButton sx={{
                            display: "flex", borderRadius: "30px",
                            backgroundColor: "#FFF4DF", height: "42px", '&:hover': {
                                backgroundColor: 'var(--secondary-color)',
                            },
                            '&:active': {
                                backgroundColor: 'var(--secondary-color)',
                            },
                        }} onClick={() => fileInputRef.current.click()} >
                            <Typography sx={{ pl: "4px", fontSize: "12px", fontWeight: 500, mr: "8px" }}>Upload photo</Typography>
                            <svg width={18} height={18} >
                                <use href={`${sprite}#icon-upload-cloud`} style={{ fill: "var(--secondary-color)" }} ></use>
                            </svg>
                        </IconButton>
                    </Box>
                </Box>
                <TextField
                    placeholder="Title"
                    {...register('title')}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ''}
                    fullWidth
                    margin="normal"
                    sx={{
                        mt: 0,
                        mb: "10px",
                        '& .MuiOutlinedInput-root': {
                            borderRadius: "30px",
                            '& fieldset': {
                                border: formData.title ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
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
                />
                <TextField
                    placeholder="Pet`s Name"
                    sx={{
                        mt: 0,
                        mb: "10px",
                        '& .MuiOutlinedInput-root': {
                            borderRadius: "30px",
                            '& fieldset': {
                                border: formData.name ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
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
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                    fullWidth
                    margin="normal"
                />
                <Box sx={{ display: "flex", gap: '8px' }}>
                    <Box sx={{ position: "relative" }}>

                        <DatePicker
                            ref={datePickerRef}
                            locale="en-GB"
                            selected={formData.birthday}
                            onChange={handleBirthdayChange}
                            customInput={<input style={{
                                m: 0,
                                borderRadius: "30px",
                                border: formData.birthday ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
                                padding: "12px",
                                height: "18px",
                                fontSize: "14px",
                                fontWeight: 500,
                                width: "124px"
                            }} />
                            }
                            placeholderText="00.00.0000"
                            calendarContainer={({ className, children }) => (
                                <div className={className} style={{ position: 'absolute', bottom: "50px", left: 0, }}>
                                    {children}
                                </div>
                            )}
                        />

                        <svg onClick={handleIconClick} style={{ position: "absolute", right: "12px", top: "12px" }} width={18} height={18}>
                            <use href={`${sprite}#icon-Button`} style={{ fill: "white", stroke: "black" }} />
                        </svg>
                    </Box>
                    <Select
                        styles={style}
                        options={createOptions(species)}
                        onChange={(selectedOption) => {
                            setSelectedSpecies(selectedOption);
                            setValue('species', selectedOption.value);
                        }}
                        value={formData.species}
                        placeholder="Type of pet"

                    />

                </Box>
                <Box mt="31px" display="flex" justifyContent="end" gap="8px">
                    <Button type="button" onClick={handleBack} color="secondary" sx={{ borderRadius: "30px", fontWeight: 700, backgroundColor: "rgba(38, 38, 38, 0.05)", color: 'var(--primary-color)', textDecoration: "none", textTransform: "capitalize", p: "12px 26px" }}>
                        Back
                    </Button>
                    <Button type="submit" color="primary" sx={{ borderRadius: "30px", backgroundColor: "var(--secondary-color)", fontWeight: 700, color: 'var(--background-color)', textDecoration: "none", textTransform: "capitalize", p: "12px 26px" }}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AddPetForm;
