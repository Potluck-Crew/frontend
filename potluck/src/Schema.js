import * as yup from 'yup'

const Schema = yup.object().shape({
    event_name: yup
        .string()
        .trim()
        .required('Event name is required')
        .min(3, 'Event name must be at least 3 characters long'),
    event_location: yup
        .string()
        .trim()
        .required('Location is required')
        .min(3, 'Location must be at least 3 characters long'),
    event_date: yup
        .string()
        .trim()
        .required('Date is required')
        .min(8, 'Event date must be at least 8 characters long'),
})

export default Schema