import * as yup from "yup"

const GuarantorsFormValidations = yup.object({
    full_name: yup.string().required("Full name is required"),
    phone_number: yup.string().required('Phone number is required'),
    email: yup.string().email('Please enter a valid email').required(),
    relationship: yup.string().required('Relationship is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    occupation: yup.string().required('Occupation is required')
})

export default GuarantorsFormValidations