import { Grid, Typography, Card, Divider, Chip } from '@mui/material'
import { Box } from '@mui/system'
import { centerAll } from '../../settings/Styles'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import Axios from 'axios'
import { Globals } from '../../Globals'
import { login } from '../../redux/slicers/authSlicer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';


function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveToLoaclStorage = user => {
        const stringifiedUser = JSON.stringify(user)
        localStorage.setItem('user', stringifiedUser)
    }

    const responseGoogle = (response) => {

        const data = {
            email: response.profileObj.email,
            first_name: response.profileObj.givenName,
            last_name: response.profileObj.familyName,
            from: "Google",
            image: response.profileObj.imageUrl,
            id: `g-${response.profileObj.googleId}`
        }

        Axios.post(Globals.login, data)
            .then(res => {
                //Redux
                dispatch(login(res.data))
                saveToLoaclStorage(res.data)
                navigate(PATHS.general.home)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const responseFacebook = (response) => {

        const data = {
            email: response.email,
            first_name: response.first_name,
            last_name: response.last_name,
            from: "Facebook",
            image: response.picture.data.url,
            id: `f-${response.id}`
        }

        Axios.post(Globals.login, data)
            .then(res => {
                //Redux
                dispatch(login(res.data))
                saveToLoaclStorage(res.data)
                navigate(PATHS.general.home)
            })
            .catch(err => {
                console.log(err)
            })

    }


    return (
        <Grid container sx={{ ...centerAll({}), height: '100vh' }}>
            <Card sx={{ width: 400, p: 5 }}>
                <Typography id="title-login-guest">Lictor</Typography>

                <Divider sx={{ my: 3 }} >התחברות</Divider>

                <Box>
                    <GoogleLogin
                        clientId="923245924223-3sj6d23oq530uikugh35qsa3kt2emhe6.apps.googleusercontent.com"
                        className='my-google-login-button'
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <Divider sx={{ my: 3 }}><Chip label="או" /></Divider>

                    <FacebookLogin
                        appId="443537093906213"
                        autoLoad={true}
                        fields="name,first_name,last_name,email,picture"
                        callback={responseFacebook}
                        cssClass='my-facebook-button-class'
                        icon={<FacebookIcon />}
                    />
                </Box>

            </Card>
        </Grid>
    )
}

export default Login
