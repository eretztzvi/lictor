import React, { useEffect, useState } from 'react'
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { LoadingButton } from '@mui/lab';
import { TextField, Typography, Button, Box } from '@mui/material';
import { addMessage } from '../../redux/slicers/messagesSlicer'
import Animate from '../../settings/Animate';
import { centerAll } from '../../settings/Styles';
import Check from '../../assets/check.png'

function PersonEmailSenderForm({ person }) {

    const { user } = useSelector(state => state.auth)
    const { messages } = useSelector(state => state.messages)
    const [isMessageSaved, setIsMessageSaved] = useState(messages.find(m => m.person_id === person._id && !m.isSent))
    const [isSaved, setIsSaved] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isSentAnima, setIsSentAnima] = useState(false)

    useEffect(() => {
        console.log(messages)
    }, [])

    const dispatch = useDispatch()

    const emailSchema = Yup.object().shape({
        title: Yup.string().required('נא לכתוב כותרת').min(5, 'מינימום חמישה תווים').max(50, 'מקסימום 50 תווים'),
        message: Yup.string().required('נא לכתוב הודעה').min(100, 'מינימום מאה תווים').max(1000, 'מקסימום אלף תווים')
    })

    const initialValues = {
        sender_id: user._id,
        sender: user.email,
        sender_fullname: `${user.first_name} ${user.last_name}`,
        time: new Date(),
        person_id: person._id,
        title: isMessageSaved ? isMessageSaved.title : "",
        message: isMessageSaved ? isMessageSaved.message : "",
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: emailSchema,
        onSubmit: async (values) => {
            try {
                values.is_sent = true
                console.log(values)
                dispatch(addMessage(values))
                setIsSentAnima(true)
                setTimeout(() => {
                    setIsSent(true)
                }, 500)
            }
            catch (err) {
                console.log(err)
            }
        }
    })

    const { values, errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;

    

    const saveMessage = e => {
        e.preventDefault()

        // Axios post call

        values.is_sent = false
        dispatch(addMessage(values))
        setIsSaved(true)
        setTimeout(() => {
            setIsSaved(false)
        }, 1500)
    }

    return (
        <FormikProvider value={formik}>

            {!isSent && <Animate anima={isSentAnima ? 'bounceOutLeft' : 'bounceInRight'}>
                <Typography variant="h5" sx={{ direction: 'rtl' }}>הודעה</Typography>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextField
                        sx={{ mt: 3, direction: 'rtl', textAlign: 'right' }}
                        fullWidth
                        type="text"
                        label="כותרת"
                        {...getFieldProps('title')}
                        value={values.title}
                        onChange={e => {
                            setFieldValue('title', e.target.value)
                        }}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                    />
                    <TextField
                        sx={{ my: 3, direction: 'rtl' }}
                        fullWidth
                        multiline
                        rows={8}
                        label="הודעה"
                        {...getFieldProps('message')}
                        value={values.message}
                        onChange={e => {
                            setFieldValue('message', e.target.value)
                        }}
                        error={Boolean(touched.message && errors.message)}
                        helperText={touched.message && errors.message}
                    />

                    <LoadingButton sx={{ width: 120 }} color={isSent ? 'success' : "secondary"} type="submit" variant="contained" loading={isSubmitting} loadingIndicator="שולח...">
                        {isSent ? "נשלח הצלחה" : "שלח"}
                    </LoadingButton>
                    <Button sx={{ ml: 3, width: 130 }} color={isSaved ? 'success' : "inherit"} type="button" variant={isSaved ? "contained" : "outlined"} onClick={e => saveMessage(e)}>
                        {isSaved ? "נשמר בהצלחה" : "שמור"}
                    </Button>
                </Form>
            </Animate>}

            {isSent &&
                <Animate anima={isSentAnima ? 'flipInX' : 'bounceOutLeft'}>
                    <Box sx={{ ...centerAll({}), height: 450 }}>
                        <img width={200} src={Check}/>
                        <Typography textAlign="center" variant='h4'>מייל נשלח בהצלחה</Typography>
                    </Box>
                </Animate>
            }
        </FormikProvider>
    )
}

export default PersonEmailSenderForm
