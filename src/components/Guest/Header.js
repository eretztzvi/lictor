import { Button, Grid, Typography } from '@mui/material'
import Animate from '../../settings/Animate'
import { centerAll , MainButtonStyle} from '../../settings/Styles'

function Header() {
    return (
        <Grid container sx={{ ...centerAll({}), height: '100vh' }}>
            <Animate anima="bounce">
                <Typography id="title-home-guest">Lictor</Typography>
            </Animate>
            <Typography>שלח הודעה לכל איש ציבור</Typography>
            <Button sx={{ ...MainButtonStyle() }}> התחל</Button>
        </Grid >
    )
}

export default Header
