import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PATHS } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slicers/authSlicer';


const settings = ['כל הפעולות שלי', 'התנתק'];

const NavBar = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const logoutAction = () => {
        localStorage.removeItem('user')
        dispatch(logout())
    }

    const PAGES = [
        {
            title: "פיד",
            link: PATHS.auth.login
        },
        {
            title: "דווח",
            link: PATHS.user.report
        },
    ]

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const to = route => {
        navigate(route)
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#9c27b0',
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>

            <AppBar position="fixed" color="default">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex', cursor: "pointer" } }}
                            id="logo-navbar-guest"
                            onClick={() => navigate(PATHS.general.home)}
                        >
                            Lictor
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {PAGES.map((page, i) => (
                                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Lictor
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
                            {PAGES.map((page, i) => (
                                page.title === "דווח" ?
                                    <Button
                                        key={i}
                                        onClick={() => to(page.link)}
                                        sx={{ mr: 1, fontSize: 15, color: 'white', width: 80, height: 40 }}
                                        variant='contained'
                                        color='warning'

                                    >
                                        {page.title}
                                    </Button>
                                    :
                                    <Button
                                        key={i}
                                        onClick={() => to(page.link)}
                                        sx={{ mr: 1, fontSize: 15, color: 'white', width: 80, height: 40 }}
                                        color='warning'

                                    >
                                        {page.title}
                                    </Button>
                            ))}
                        </Box>

                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 3 }}>
                            <Avatar alt="Remy Sharp" src={user && user.image} />
                        </IconButton>

                        <Box sx={{ flexGrow: 0, display: { md: 'none' } }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, i) => (
                                    <MenuItem key={i} onClick={setting === "התנתק" ? logoutAction : handleCloseNavMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default NavBar;