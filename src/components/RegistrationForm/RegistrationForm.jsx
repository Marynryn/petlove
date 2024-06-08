import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema, loginSchema } from 'schema/schema';
import Btn from 'components/Button/Button';
import { IconButton, InputAdornment, TextField, Box } from '@mui/material';

import sprite from '../../img/svg/symbol-defs.svg'
import { useDispatch } from 'react-redux';
import { login, userPost } from 'store/operations';
import theme from 'components/Theme';



const RegistrationForm = ({ type, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validationSchema = type === 'register' ? authSchema : loginSchema;

    const methods = useForm({
        resolver: yupResolver(validationSchema)
    });
    const { handleSubmit, formState: { errors }, register } = methods;

    const onSubmit = methods.handleSubmit(async (data) => {
        console.log(data);
        const { email, password, name } = data;

        try {
            if (type === 'register') {
                await dispatch(userPost({ email, password, name }));
            } else {
                await dispatch(login({ email, password }));


            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Invalid email or password";
            toast.error(errorMessage);
        }
    });

    const style = {

        mt: 0,
        mb: "16px",
        [theme.breakpoints.up("md")]: {
            height: "52px"
        },
        '& .MuiOutlinedInput-input': {
            p: "12px",
            height: "16px",
            fontSize: "14px",
            fontWeight: 500,
            [theme.breakpoints.up("md")]: {
                p: "16px"
            },
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: "30px",

            border: "1px solid rgba(38, 38, 38, 0.15)",
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--secondary-color)',

            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--secondary-color)',

            },
        },
        '& .MuiFormHelperText-root': {
            height: "12px",
            m: 0,
            fontSize: "10px",
            color: "#EF2447",

            borderColor: "#EF2447",
            '& .MuiOutlinedInput-input': {
                borderColor: "#EF2447"
            }
        }
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box >
                    {type === 'register' && (
                        <TextField sx={style}
                            id="name"
                            InputLabelProps={{ shrink: false }}

                            placeholder="Name"
                            fullWidth
                            margin="normal"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ''}
                        />
                    )}

                    <TextField
                        sx={style}
                        id="email"

                        InputLabelProps={{ shrink: false }}
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />

                    <TextField
                        sx={style}
                        id="password"
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{ color: 'var(--secondary-color)' }}
                                    >
                                        {showPassword ? (
                                            <svg width={18} height={18} style={{ stroke: 'var(--secondary-color)', fill: " white" }}>
                                                <use href={`${sprite}#icon-eye-off`}></use>
                                            </svg>
                                        ) : (
                                            <svg width={18} height={18} style={{ stroke: 'var(--secondary-color)', fill: " white" }}>
                                                <use href={`${sprite}#icon-eye`}></use>
                                            </svg>
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    {type === 'register' && (
                        <TextField
                            sx={style}
                            id="confirmPassword"
                            placeholder='Confirm password'
                            type={showConfirmPassword ? 'text' : 'password'}
                            fullWidth
                            {...register("confirmPassword")}
                            InputLabelProps={{ shrink: false }}

                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            sx={{ color: 'var(--secondary-color)' }} // Цвет иконки
                                        >
                                            {showConfirmPassword ? (
                                                <svg width={18} height={18} style={{ stroke: 'var(--secondary-color)', fill: " white" }}>
                                                    <use href={`${sprite}#icon-eye-off`}></use>
                                                </svg>
                                            ) : (
                                                <svg width={18} height={18} style={{ stroke: 'var(--secondary-color)', fill: " white" }}>
                                                    <use href={`${sprite}#icon-eye`}></use>
                                                </svg>
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}

                    <Box sx={{
                        mt: type === 'login' ? "40px" : "14px", [theme.breakpoints.up("md")]: {
                            height: "52px"
                        },
                    }}>
                        <Btn type={"submit"} onClick={onSubmit} bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"}>
                            {type === 'login' ? 'Log In' : 'Registration'}
                        </Btn>
                    </Box>
                </Box>
            </form>
        </FormProvider>
    );
};

export default RegistrationForm;
