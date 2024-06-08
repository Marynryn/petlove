import { Box, List, ListItem, Typography } from '@mui/material'
import Btn from 'components/Button/Button'
import theme from 'components/Theme'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from 'store/operations'

export const ModalApproveAction = ({ onClose }) => {
    const dispatch = useDispatch()
    const out = () => {
        dispatch(logOut());

    }
    const close = () => {
        onClose();
    }
    return (

        <Box sx={{
            pb: " 20px", zIndex: 9999, [theme.breakpoints.up('md')]: {
                p: "60px 60px 60px 60px",
                width: "288px",
                height: "204px",
            }
        }}>
            <Box sx={{ width: "80px", height: "80px", mb: "20px", mx: "auto", backgroundColor: "#FFF4DF", borderRadius: "100%", textAlign: 'center' }}>
                <Typography sx={{ textAlign: "center", fontSize: "44px", fontWeight: 800, pt: "5px" }}>🐈</Typography>
            </Box>
            <Typography sx={{
                textAlign: "center", color: "var(--primary-color)", mb: "20px", fontSize: "20px", fontWeight: 700, [theme.breakpoints.up('md')]: {
                    fontSize: "24px",
                    mb: "28px"
                }
            }}>Already leaving?</Typography>


            <List sx={{ p: 0, display: "flex", gap: "8px" }}>
                <ListItem sx={{ p: 0 }}>

                    <Btn bgColor={"var(--secondary-color)"} textColor={"var(--background-color)"} onClick={out}><Typography sx={{ fontSize: "14px", fontWeight: 700, }} >Yes</Typography></Btn>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 0 }}>

                    <Btn fontWeight={700} bgColor={"var(--accent-color)"} textColor={"var(--primary-color)"} onClick={close}><Typography sx={{ fontSize: "14px", fontWeight: 700, }} >Cancel</Typography></Btn>

                </ListItem>

            </List>


        </Box>

    )
}
