import React, { useRef } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import sprite from '../../img/svg/symbol-defs.svg';
import { uploadFile } from 'helpers/uploadFile';

const AvatarUpload = ({ avatarUrl, setAvatarUrl, setValue, error }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const imageUrl = await uploadFile(file);
                setValue('imgURL', imageUrl);
                setAvatarUrl(imageUrl);
            } catch (error) {
                console.error('Error uploading file:', error.message);
            }
        }
    };

    return (
        <>
            {avatarUrl === "" ? (
                <Box sx={{ width: "68px", height: "68px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", textAlign: 'center', marginTop: "8px", marginBottom: "16px" }}>
                    <svg width={34} height={34} style={{ padding: "17px" }}>
                        <use href={`${sprite}#icon-icons8_cat-footprint`} style={{ fill: "var(--secondary-color)" }}></use>
                    </svg>
                </Box>
            ) : (
                <Box sx={{ width: "68px", height: "68px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", marginTop: "8px", marginBottom: "16px", overflow: "hidden" }}>
                    <img src={avatarUrl} alt="pet" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                    error={Boolean(error)}
                    helperText={error}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "8px" }}>
                    <IconButton
                        sx={{
                            display: "flex", borderRadius: "30px",
                            backgroundColor: "#FFF4DF", height: "42px", '&:hover': {
                                backgroundColor: 'var(--secondary-color)',
                            },
                            '&:active': {
                                backgroundColor: 'var(--secondary-color)',
                            },
                        }}
                        onClick={() => fileInputRef.current.click()}
                    >
                        <Typography sx={{ pl: "4px", fontSize: "12px", fontWeight: 500, mr: "8px" }}>Upload photo</Typography>
                        <svg width={18} height={18} >
                            <use href={`${sprite}#icon-upload-cloud`} style={{ fill: "var(--secondary-color)" }} ></use>
                        </svg>
                    </IconButton>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </Box>
            </Box>
        </>
    );
};
export default AvatarUpload;
