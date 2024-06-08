import { Typography } from '@mui/material'
import React from 'react'

export const Title = ({ children }) => {
    return (
        <Typography component="h2" sx={(theme) => ({
            fontSize: "28px",
            fontWeight: 700,
            color: "text.primary",
            lineHeight: 1,
            letterSpacing: "-1.12px",

            [theme.breakpoints.up("md")]: {
                fontSize: "54px",


                letterSpacing: "-1.62px",
            }
        })
        } > {children}</ Typography >
    )
}

export default Title;