import { forwardRef } from 'react';
import { Box, TextField, Typography, Slide, Divider, Dialog, Button, Alert, AlertTitle } from '@mui/material';
import PersonEmailSenderForm from './PersonEmailSenderForm';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

function PersonDialog({ open, handleClose, person }) {

    return (
        <Dialog
            sx={{ width: '100%' }}
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            {person && <Box sx={{ height: '100vh', width: '800px' }}>
                <Box sx={{ m: 3 }}>
                    <Typography noWrap variant='h1'>{person.first_name} {person.last_name}</Typography>
                    <Typography variant='h6'>{person.job} 🔥 {person.company}</Typography>
                </Box>
                <Divider />
                <Box sx={{ m: 3, height: 450 }}>
                    <PersonEmailSenderForm person={person} />
                </Box>
                <Box sx={{ m: 3 }}>
                    <Alert dir='rtl' lang='heb' color='info' sx={{ height: '10vh' }}>
                        <AlertTitle>&nbsp;&nbsp;חוקים לכתיבת מייל</AlertTitle>
                    </Alert>
                </Box>
            </Box>}
        </Dialog>
    );
}

export default PersonDialog
