import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, TextField, Typography } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from 'schema/schema';
import sprite from '../../img/svg/symbol-defs.svg';
import { currentUserEdit } from 'store/operations';
import toast from 'react-hot-toast';
import { uploadFile } from 'helpers/uploadFile';
import { selectUser } from 'store/selectors';
import Btn from 'components/Button/Button';

const ModalEditUser = ({ onClose }) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);


    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(profileSchema),
        defaultValues: {
            name: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            avatar: user.avatar || ''
        },
    });

    const onSubmit = async (data) => {
        const filteredData = {};
        for (const key in data) {
            if (data[key] && data[key].trim() !== "") {
                filteredData[key] = data[key];
            }
        }
        setLoading(true);
        try {
            await dispatch(currentUserEdit(filteredData));
            onClose();
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Error updating user: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const imageUrl = await uploadFile(file);
                console.log(imageUrl);
                setValue('avatar', imageUrl);

            } catch (error) {
                console.error('Error uploading file:', error.message);
            }
        }
    };

    return (
        <Box sx={{ pt: "20px", pb: "20px", width: "295px" }}>
            <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                Edit information
            </Typography>
            {user.avatar === "" ? (
                <Box sx={{ width: "80px", height: "80px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", textAlign: 'center', mt: "20px", mb: "12px" }}>
                    <svg width={40} height={40} style={{ padding: "20px", }}>
                        <use href={`${sprite}#icon-Vector-2`} style={{ fill: "var(--secondary-color)" }} ></use>
                    </svg>
                </Box>
            ) : (
                <Box sx={{ width: "80px", height: "80px", mx: "auto", borderRadius: "100%", textAlign: 'center', mt: "20px", mb: "12px" }}>
                    <img src={user.avatar} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                </Box>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", gap: "8px", mb: "10px", }}>
                    <TextField
                        sx={{
                            mt: 0,
                            mb: 0,
                            width: "160px",
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "30px",
                                '& fieldset': {
                                    border: user.avatar ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'var(--secondary-color)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'var(--secondary-color)',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--primary-color)',
                                    opacity: 1,
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
                        placeholder="Avatar URL"
                        value={user.avatar}
                        onChange={(e) => setValue('avatar', e.target.value)}
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
                    sx={{
                        mt: 0,
                        mb: "10px",
                        '& .MuiOutlinedInput-root': {
                            borderRadius: "30px",
                            '& fieldset': {
                                border: user.name ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'var(--primary-color)',
                                opacity: 1,
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
                    placeholder="Name"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    sx={{
                        mt: 0,
                        mb: "10px",
                        '& .MuiOutlinedInput-root': {
                            borderRadius: "30px",
                            '& fieldset': {
                                border: user.email ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'var(--primary-color)',
                                opacity: 1,
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
                    placeholder="Email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    sx={{
                        mt: 0,
                        mb: "10px",
                        '& .MuiOutlinedInput-root': {
                            borderRadius: "30px",
                            '& fieldset': {
                                border: user.phone ? '1px solid var(--secondary-color)' : '1px solid rgba(38, 38, 38, 0.15)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--secondary-color)',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'var(--primary-color)',
                                opacity: 1,
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
                    placeholder="+380"
                    {...register('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ''}
                    fullWidth
                    margin="normal"
                />
                <Box mt={2} display="flex" justifyContent="flex-end">

                    <Btn bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"} type="submit" disabled={loading}>Go to profile</Btn>
                </Box>
            </form>
        </Box>
    );
};

export default ModalEditUser;
