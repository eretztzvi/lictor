import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//------------------------------------------------------
import Masonry from '@mui/lab/Masonry';
import { Grid, TextField, Typography, Box, Button, Paper } from '@mui/material';
import { centerAll, SearchBoxStyle, SearchInputStyle, SearchButtonStyle } from '../../settings/Styles';
import OnePerson from '../../components/Persons/OnePerson';
import PersonDialog from '../../components/Persons/PersonDialog';

//------------------------------------------------------

function HomeUser() {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { persons } = useSelector(state => state.persons)

    const [searchVal, setSearchVal] = useState('')

    const handleSearch = () => {
        console.log(searchVal)
    }

    const [currDisplay, setCurrDisplay] = useState(10)

    const [isHover, setIsHover] = useState('')

    const [selectedPerson, setSelectedPerson] = useState(null)

    const [openDialog, setOpenDialog] = useState(false)

    const handlePersonModal = fake => {
        setOpenDialog(true)
        setSelectedPerson(fake)
    }

    return (
        <Grid container sx={{ ...centerAll({ flexDirection: 'row' }), mt: 15 }} >
            <Grid item sx={12} md={2} lg={2} ></Grid>
            <Grid item sx={12} md={8} lg={8} >
                <Box sx={{ width: "100%", mb: 5, ...centerAll({}) }}>
                    <Box id="search-input-box-home-user" sx={{ ...SearchBoxStyle({}) }}>
                        <button onClick={handleSearch} style={{ ...SearchButtonStyle({}) }}>חפש</button>
                        <input style={{ ...SearchInputStyle({}) }} value={searchVal} onChange={e => setSearchVal(e.target.value)} />
                    </Box>
                </Box>
            </Grid>
            <Grid item sx={12} md={2} lg={2} ></Grid>
            <Grid item sx={12} md={2} lg={2} ></Grid>
            <Grid item sx={12} md={8} lg={8} >
                <Box sx={{ width: '100%' }}>
                    <Masonry columns={3} spacing={3} sx={{ m: 0 }} >
                        {persons && persons.slice(0, currDisplay).map((fake, index) => (
                            <OnePerson fake={fake} isHover={isHover} key={index} setIsHover={setIsHover} handlePersonModal={handlePersonModal} />
                        ))}
                    </Masonry>
                </Box>
            </Grid>
            <Grid item sx={12} md={2} lg={2} ></Grid>

            <Box sx={{ m: 5, width: 1200, ...centerAll({}) }}>
                <Button sx={{ width: 150, height: 45 }} variant='outlined' color="warning" onClick={() => setCurrDisplay(perv => perv + 10)}>הצג עוד</Button>
            </Box>

            <PersonDialog open={openDialog} handleClose={() => setOpenDialog(false)} person={selectedPerson} />
        </Grid>
    )
}

export default HomeUser



// const fetchDataFake = () => {

    //     const data = []

    //     for (let i = 0; i < 30; i++) {
    //         const obj = {
    //             _id: faker.datatype.uuid(),
    //             first_name: faker.name.firstName(),
    //             last_name: faker.name.lastName(),
    //             image: faker.image.image(),
    //             company: faker.company.companyName(),
    //             job: faker.name.jobTitle(),
    //             gender: faker.name.gender(),
    //             likes: [
    //                 {
    //                     like_id: 'sdfsdfrtyrty53dgdfg',
    //                     name: "happy",
    //                     count: 111,
    //                     icon: '😀'
    //                 },
    //                 {
    //                     like_id: 'sdfsdfrtyrty53dgdnv',
    //                     name: "fine",
    //                     count: 123,
    //                     icon: '😐'
    //                 },
    //                 {
    //                     like_id: 'sdfsdfrtyrty53dgdnb',
    //                     name: "angry",
    //                     count: 321,
    //                     icon: '🤬'
    //                 },
    //             ]
    //         }
    //         data.push(obj)

    //     }

    //     dispatch(download(data))
    //     setFakeData(data)
    //     setFakeDataPlay(data)
    // }
