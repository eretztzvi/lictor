import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from '../../components/Guest/Header'
import Numbers from '../../components/Guest/Numbers'
import Animate from '../../settings/Animate'
import { COLORS } from '../../settings/Styles'

function Home() {

    const centerAll = ({ display = 'flex', justifyContent = "center", alignItems = "center", flexDirection = "column" }) => {
        return {
            display,
            justifyContent,
            alignItems,
            flexDirection
        }
    }
    return (
        <Animate anima='bounceInLeft'>
            <Grid container sx={{ height: '100vh', ...centerAll({ flexDirection: "row" }) }}>
                <Header />
                <Numbers />
            </Grid>
        </Animate>
    )
}

export default Home
