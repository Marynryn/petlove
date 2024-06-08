import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { addMyPet, getSpecies } from 'store/operations';
import { petSchema } from 'schema/schema';
import { selectGetSpecies } from 'store/selectors';
import Title from 'components/Title/Title';
import AvatarUpload from 'components/AvatarUploader/AvatarUploader';
import SpeciesSelect from 'components/SpeciesSelect/SpeciesSelect';
import BirthdayPicker from 'components/BirthdayPicker/BirthdayPicker';
import SexRadioGroup from 'components/SexRadioGroup/SexRadioGroup';
import theme from 'components/Theme';


const AddPetForm = () => {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedSex, setSelectedSex] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        sex: '',
        species: '',
        birthday: '',
        title: '',
        imgURL: '',
    });
    const species = useSelector(selectGetSpecies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const methods = useForm({
        resolver: yupResolver(petSchema),
        defaultValues: formData
    });

    useEffect(() => {
        dispatch(getSpecies());
    }, [dispatch]);
    console.log(methods.formState.errors)
    const onSubmit = async (data) => {
        const petData = {
            ...data,
            sex: selectedSex,
            species: selectedSpecies,
        };
        console.log(petData);
        console.log(data)
        try {
            await dispatch(addMyPet(petData)).unwrap();
            toast.success('Pet added successfully');
            navigate('/profile');
        } catch (error) {
            toast.error('Failed to add pet');
        }
    };
    console.log(methods.error)
    const handleBack = () => {
        navigate('/my-pets');
    };
    const boxStyle = {
        borderRadius: "30px",
        backgroundColor: "var(--background-color)",
        p: "28px 20px 20px",
        mt: "18px",
        mb: "40px"
    };
    return (
        <Box sx={boxStyle}>
            <Title>Add Pet</Title>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} >
                    <SexRadioGroup selectedSex={selectedSex} setSelectedSex={setSelectedSex} />
                    <AvatarUpload avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} setValue={methods.setValue} error={methods.formState.errors.imgURL?.message} />

                    <TextField
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
                        placeholder='Title'
                        fullWidth
                        margin="normal"
                        {...methods.register('name')}
                        error={!!methods.formState.errors.name}
                        helperText={methods.formState.errors.name?.message}
                    />
                    <TextField
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
                        placeholder='Pet`s Name'
                        fullWidth
                        margin="normal"
                        {...methods.register('title')}
                        error={!!methods.formState.errors.title}
                        helperText={methods.formState.errors.title?.message}
                    />
                    <Box display="flex" gap="8px" sx={{
                        [theme.breakpoints.down('sm')]: {
                            display: 'block',
                        },
                    }}>
                        <BirthdayPicker formData={formData} setFormData={setFormData} />
                        <SpeciesSelect species={species} selectedSpecies={selectedSpecies} setSelectedSpecies={setSelectedSpecies} />
                    </Box>

                    <Box mt="31px" display="flex" justifyContent="end" gap="8px">
                        <Button type="button" onClick={handleBack} color="secondary" sx={{ borderRadius: "30px", fontWeight: 700, backgroundColor: "rgba(38, 38, 38, 0.05)", color: 'var(--primary-color)', textDecoration: "none", textTransform: "capitalize", p: "12px 26px" }}>
                            Back
                        </Button>
                        <Button type="submit" sx={{ borderRadius: "30px", backgroundColor: "var(--secondary-color)", fontWeight: 700, color: 'var(--background-color)', textDecoration: "none", textTransform: "capitalize", p: "12px 26px" }}>
                            Submit
                        </Button>
                    </Box>

                </form>
            </FormProvider>
        </Box >
    );
};

export default AddPetForm;


