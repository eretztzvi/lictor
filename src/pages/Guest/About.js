import { Grid } from '@mui/material'
import React from 'react'
import Animate from '../../settings/Animate'
import { centerAll, COLORS } from '../../settings/Styles'

function About() {
    return (
        <Animate anima='bounceInLeft'>
            <Grid container sx={{ height: '100vh', ...centerAll({ flexDirection: "row" }) }}>
                <h1>123</h1>
            </Grid>
        </Animate>
    )
}

export default About
