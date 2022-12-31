import React from "react";
import {Box,Button,TextField} from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../../components/Header';
import { ErrorSharp } from "@mui/icons-material";

const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address1:"",
    address2:"",
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[3,4][ -]?[0-9]{3,4}$/;

//validations
const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string()
    .email("invalid email")
    .required("required"),

    contact: yup.string()
    .matches(phoneRegExp,"phone Number is not valid")
    .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
});

const Form = ()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values)=>{
        console.log(values);
    }
    return (
        <Box m="20px" sx={{width:"80vw"}}>
            <Header title="Create USER" subtitle="Create a New User Profile"/>
            <Formik
            onSubmit = {handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
            >
                {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0,1fr))"
                        sx={{
                            "& > div":{gridColumn:isNonMobile?undefined:"span 4"}
                        }}
                        >
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Fist Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            //!! forcing to make boolean
                            error={!!touched.firstName && !!errors.firstName}
                            helperText = {touched.firstName && errors.firstName}
                            sx={{gridColumn:"span 2"}}
                            />
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="lastName"
                            //!! forcing to make boolean
                            error={!!touched.lastName && !!errors.lastName}
                            helperText = {touched.firstName && errors.lasttName}
                            sx={{gridColumn:"span 2"}}
                            />
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            //!! forcing to make boolean
                            error={!!touched.email && !!errors.email}
                            helperText = {touched.email && errors.email}
                            sx={{gridColumn:"span 2"}}
                            />
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Contact}
                            name="contact"
                            //!! forcing to make boolean
                            error={!!touched.contact && !!errors.contact}
                            helperText = {touched.contact && errors.contact}
                            sx={{gridColumn:"span 2"}}
                            />
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name="address1"
                            //!! forcing to make boolean
                            error={!!touched.address1 && !!errors.address1}
                            helperText = {touched.address1 && errors.address1}
                            sx={{gridColumn:"span 4"}}
                            />
                            <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            //!! forcing to make boolean
                            error={!!touched.address2 && !!errors.address2}
                            helperText = {touched.address2 && errors.address2}
                            sx={{gridColumn:"span 4"}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}
export default Form;