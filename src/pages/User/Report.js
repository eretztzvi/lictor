import { useState } from 'react';
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box, Button } from '@mui/material';
import Step1 from '../../components/NewPersonByUser/Step1';
import Step2 from '../../components/NewPersonByUser/Step2';
import Step3 from '../../components/NewPersonByUser/Step3';
import Thanks from '../../components/NewPersonByUser/Thanks';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

const steps = ['כללי', 'פרטי קשר', 'סיום'];



function Report() {

    const [active, setActive] = useState(0)

    const handleActiveStep = action => {
        console.log(active)
        if (active === steps.length)
            return
        if (action === "forward")
            setActive(active => active + 1)
        if (action === "back")
            setActive(active => active - 1)
    }

    return (
        <Grid container spacing={5}>
            <Grid item sx={12} md={12} lg={12} sx={{ mt: 10 }}>
                <Typography textAlign='right' sx={{ direction: 'rtl', pr: 45, pt: 3 }} variant="h4"> דווח לנו על פרטי קשר</Typography>
            </Grid>

            <Grid item sx={12} md={2} lg={2}>
            </Grid>

            <Grid item sx={12} md={8} lg={8}>
                <Stepper alternativeLabel activeStep={active} connector={<QontoConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>

            <Grid item sx={12} md={2} lg={2}>
            </Grid>


            <Grid item sx={12} md={2} lg={2}>
            </Grid>

            <Grid item sx={12} md={8} lg={8}>
                {active === 0 && <Step1/>}
                {active === 1 && <Step2/>}
                {active === 2 && <Step3/>}
                {active === 3 && <Thanks/>}
            </Grid>

            <Grid item sx={12} md={2} lg={2}>
            </Grid>

            <Grid item sx={12} md={2} lg={2}>
            </Grid>

            <Grid item sx={12} md={8} lg={8}>
                <Box display="flex" justifyContent="space-between" sx={{px:25}}>
                    {active < steps.length - 1 && <Button variant='contained' color="warning" onClick={() => handleActiveStep('forward')}>הבא</Button>}
                    {active === steps.length - 1 && <Button variant='contained' color="success" onClick={() => handleActiveStep('forward')}>סיום</Button>}
                    {active !== 0 && active !== steps.length && <Button variant='contained' color="warning" onClick={() => handleActiveStep('back')}>הקודם</Button>}
                </Box>
            </Grid>

            <Grid item sx={12} md={2} lg={2}>
            </Grid>
        </Grid>
    )
}

export default Report
