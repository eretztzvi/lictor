import React from 'react'
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'
import { LoadingButton } from '@mui/lab';
import { TextField, Typography } from '@mui/material';

function PersonEmailSenderForm({ person }) {

    const { user } = useSelector(state => state.auth)

    const emailSchema = Yup.object().shape({
        title: Yup.string().required('נא לכתוב כותרת').min(5, 'מינימום חמישה תווים').max(50, 'מקסימום 50 תווים'),
        message: Yup.string().required('נא לכתוב הודעה').min(100, 'מינימום מאה תווים').max(1000, 'מקסימום אלף תווים')
    })

    const initialValues = {
        sender: user.email,
        time: new Date(),
        person_id: person._id,
        title: "",
        message: "",
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: emailSchema,
        onSubmit: async (values) => {
            try {
                console.log(values)
            }
            catch (err) {
                console.log(err)
            }
        }
    })

    const { values, errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;

    return (
        <FormikProvider value={formik}>
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
                <LoadingButton sx={{ width: 120 }} type="submit" variant="contained" loading={isSubmitting} loadingIndicator="שולח...">
                    שלח
                </LoadingButton>
                <LoadingButton sx={{ ml: 3, width: 120 }} type="button" variant="outlined" loading={isSubmitting} loadingIndicator="שולח...">
                    שמור הודעה
                </LoadingButton>
            </Form>
        </FormikProvider>
    )
}

export default PersonEmailSenderForm
