import { Box, Typography } from '@mui/material'
import Btn from 'components/Button/Button'

import React from 'react'
import css from "./NotFound.module.css"
import theme from 'components/Theme'
import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <div>

      <Box sx={{
        borderRadius: "30px", backgroundColor: "var(--secondary-color)", mt: "20px", py: '218px', [theme.breakpoints.up("md")]: {
          borderRadius: "60px", py: "160px"
        },
        [theme.breakpoints.up("lg")]: {
          borderRadius: "60px", py: "60px", mt: "32px"
        },
      }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{
            color: "var(--background-color)", fontSize: "120px", fontWeight: 800, [theme.breakpoints.up("md")]: {
              fontSize: "300px",
            },
          }} >4</Typography>
          <Box sx={{
            borderRadius: "100%", width: "116px", height: "117px", fontSize: "120px", fontWeight: 800, [theme.breakpoints.up("md")]: {
              width: "299px", height: "300px",
            },
          }}>
            <div className={css.NotFound}></div>
          </Box>
          <Typography sx={{
            color: "var(--background-color)", fontSize: "120px", fontWeight: 800, [theme.breakpoints.up("md")]: {
              fontSize: "300px",
            },
          }} >4</Typography></Box>
        <Typography sx={{
          my: "20px", color: "var(--background-color)", textAlign: "center", fontSize: "16px", fontWeight: 700, [theme.breakpoints.up("md")]: {
            fontSize: "24px",
          }, [theme.breakpoints.up("lg")]: {
            mt: "-20px"
          },
        }} >Ooops! This page not found :(</Typography>
        <Link to="/">
          <Box sx={{ width: "150px", mx: "auto" }}>
            <Btn bgColor={"#FFF4DF"} textColor={"var(--secondary-color)"}>To home page</Btn></Box></Link>
      </Box>
    </div>
  )
}
export default NotFound