import { Grid, TextField, Typography, Box, Button, Paper } from '@mui/material';
import { useState } from 'react';
import Animate from '../../settings/Animate';
import { centerAll } from '../../settings/Styles';

function OnePerson({ fake, isHover, setIsHover, handlePersonModal }) {

    const [isPressed, setIsPressed] = useState('')

    const handlePress = like => {
        console.log(like)
        setIsPressed(like)
        setTimeout(() => {
            setIsPressed('')
        }, 1500)
    }

    return (
        <Box style={{ position: 'relative' }} onMouseEnter={() => setIsHover(`${fake.first_name} ${fake.last_name}`)} onMouseLeave={() => setIsHover('')} >
            <img style={{}} width='100%' src={fake.image} />
            {isHover === `${fake.first_name} ${fake.last_name}` &&
                <Box sx={{ ...centerAll({}), width: '100%', height: '100%', position: 'absolute', top: '0px', background: 'rgba(0, 0, 0, 0.5)' }} >

                    <Box onClick={() => handlePersonModal(fake)} style={{ ...centerAll({ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'start-flex', border: '10px solid pink', cursor: 'pointer' }), padding: '15px', height: 100 }}>
                        <Box>
                            <Typography fontWeight="bold" color="white" variant="h6" textAlign='right' sx={{ direction: 'rtl', ml: 3 }}>{fake.first_name} {fake.last_name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" color="white" textAlign='right' sx={{ direction: 'rtl' }}>{fake.job}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ ...centerAll({ flexDirection: 'row', justifyContent: 'space-between' }) }}>
                        <Box sx={{ ...centerAll({}) }}>
                            <Button onClick={() => handlePress('angry')} >
                                <Animate anima={isPressed === "angry" && 'rubberBand'}>
                                    <Typography sx={{ fontSize: 40 }}>🤬</Typography>
                                </Animate>
                            </Button>
                            <Typography color="white" variant='subtitle2'>352</Typography>
                        </Box>
                        <Box sx={{ ...centerAll({}) }}>
                            <Button onClick={() => handlePress('clueless')}>
                                <Animate anima={isPressed === "clueless" && 'shake'}>
                                    <Typography sx={{ fontSize: 40 }}>😐</Typography>
                                </Animate>
                            </Button>
                            <Typography color="white" variant='subtitle2'>32</Typography>
                        </Box>
                        <Box sx={{ ...centerAll({}) }}>
                            <Button onClick={() => handlePress('love')}>
                                <Animate anima={isPressed === "love" && 'tada'}>
                                    <Typography sx={{ fontSize: 40 }}>😀</Typography>
                                </Animate>
                            </Button>
                            <Typography color="white" variant='subtitle2'>1352</Typography>
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default OnePerson
