import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import faker from 'faker'
//------------------------------------------------------
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import { Grid, TextField, Typography, Box, Button, Paper } from '@mui/material';
import { centerAll, SearchBoxStyle, SearchInputStyle, SearchButtonStyle } from '../../settings/Styles';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import OnePerson from '../../components/Persons/OnePerson';
import PersonDialog from '../../components/Persons/PersonDialog';

//------------------------------------------------------

function HomeUser() {
    const pageRef = useRef()
    const { user } = useSelector(state => state.auth)

    const [fakeData, setFakeData] = useState([])
    const [fakeDataPlay, setFakeDataPlay] = useState([])

    const fetchDataFake = () => {

        // faker.locale = "hebrew";

        const data = []
        for (let i = 0; i < 100; i++) {
            const obj = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                image: faker.image.people(),
                company: faker.company.companyName(),
                job: faker.name.jobTitle(),
                gender: faker.name.gender(),
            }
            data.push(obj)
        }

        setFakeData(data)
        setFakeDataPlay(data)
    }
    useEffect(() => {
        fetchDataFake()
    }, [])

    const [searchVal, setSearchVal] = useState('')

    const handleSearch = () => {

        if (searchVal.length === 0) {
            setFakeData(fakeDataPlay)
            return
        }
        const temp = [...fakeDataPlay]
        setFakeData(temp.filter(t => `${t.first_name} ${t.last_name}`.includes(searchVal)))
    }

    const [currDisplay, setCurrDisplay] = useState(10)

    const [isHover, setIsHover] = useState('')

    const [selectedPerson, setSelectedPerson] = useState(null)

    const [openDialog, setOpenDialog] = useState(false)

    const handlePersonModal = fake => {
        setOpenDialog(true)
        console.log(fake)
        setSelectedPerson(fake)
    }

    return (
        <Grid container sx={{ ...centerAll({}), mt: 15 }} ref={pageRef}>
            <Box sx={{ width: 1200, mb: 5, ...centerAll({}) }}>
                <Box id="search-input-box-home-user" sx={{ ...SearchBoxStyle({}) }}>
                    <button onClick={handleSearch} style={{ ...SearchButtonStyle({}) }}>חפש</button>
                    <input style={{ ...SearchInputStyle({}) }} value={searchVal} onChange={e => setSearchVal(e.target.value)} />
                </Box>
            </Box>
            <Box sx={{ width: 1200 }}>
                <Masonry columns={3} spacing={3} >
                    {fakeData && fakeData.slice(0, currDisplay).map((fake, index) => (
                        <OnePerson fake={fake} isHover={isHover} key={index} setIsHover={setIsHover} handlePersonModal={handlePersonModal} />
                    ))}
                </Masonry>
            </Box>
            <Box sx={{ m: 5, width: 1200, ...centerAll({}) }}>
                <Button sx={{ width: 150, height: 45 }} variant='outlined' color="warning" onClick={() => setCurrDisplay(perv => perv + 10)}>הצג עוד</Button>
            </Box>

            <PersonDialog open={openDialog} handleClose={() => setOpenDialog(false)} person={selectedPerson} />
        </Grid>
    )
}

export default HomeUser
