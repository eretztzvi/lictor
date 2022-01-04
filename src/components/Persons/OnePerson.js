import { Grid, TextField, Typography, Box, Button, Paper } from '@mui/material';
import { useState } from 'react';
import Animate from '../../settings/Animate';
import { centerAll } from '../../settings/Styles';
import { useSelector, useDispatch } from 'react-redux'
import { download, addLike } from '../../redux/slicers/likesSlicer'
import { addLikeToPerson, decreaseLikeFromPerson } from '../../redux/slicers/personsSlice'
import Axios from 'axios'
import { Globals } from '../../Globals'

function OnePerson({ fake, isHover, setIsHover, handlePersonModal }) {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { likes } = useSelector(state => state.likes)

    const [isPressed, setIsPressed] = useState('')

    const pressLike = like => {
        // active effect
        setIsPressed(like.name)
        setTimeout(() => {
            setIsPressed('')
        }, 1500)

        const obj = {
            user_id: user._id,
            email: user.email,
            like_name: like.name,
            like_id: like.like_id,
            // time_liked: new Date(),
            person_id: fake._id,
            is_liked: likes.find(l => l.like_name === like.name && l.email === user.email && fake._id === l.person_id) ? true : false
        }

        // find if there is a like to decrease to the same person
        const likeToDecrease = likes.find(l => l.person_id === obj.person_id)

        Axios.post(Globals.addLike, obj)
            .then(res => {
                console.log(res.data)

                if (likeToDecrease && likeToDecrease.like_name !== obj.like_name)
                    dispatch(decreaseLikeFromPerson(likeToDecrease))

                dispatch(addLike(obj))
                dispatch(addLikeToPerson(obj))
            })
            .catch(err => {
                console.log(err)
            })

        console.log(likes)

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

                        {fake.likes.map((like, i) =>
                            <Box sx={{ ...centerAll({}) }} key={i}>
                                <Button onClick={() => pressLike(like)} >
                                    <Animate anima={isPressed === like.name && 'rubberBand'}>
                                        <Typography sx={{ fontSize: likes.find(l => l.like_name === like.name && l.email === user.email && fake._id === l.person_id) ? 50 : 30 }}>{like.icon}</Typography>
                                    </Animate>
                                </Button>
                                <Typography color="white" variant='subtitle2'>{like.count}</Typography>
                            </Box>
                        )}

                    </Box>
                </Box>
            }
        </Box>
    )
}

export default OnePerson
