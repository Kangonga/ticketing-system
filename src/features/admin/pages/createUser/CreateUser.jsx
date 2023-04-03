import React from 'react'
import { Container, Form, SubmitButton } from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { TextField, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

export default function CreateUser() {
    const initialValues = {
        id:uuidv4(),
        firstName:'',
        lastName:'',
        tickets:'0',
        imgUrl:'',
        password:'12345',
        status:''
    }
    const userSchema = yup.object().shape({
        id: yup.string(),
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        tickets: yup.string().required('Default value should be present'),
        imgUrl:yup.string(),
        password:yup.string().required('A default value is required'),
        status:yup.string().required('default status is required')
    })
    const handleSubmit = (data)=>{
        console.log(data)
    }
  return (
    <Container>
        <Typography>Create a new user</Typography>
        <Formik
              handleSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
              >
              {
                ({values, errors, touched, handleChange, handleSubmit, handleBlur})=>(
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      variant='filled'
                      label='id'
                      name='id'
                      value = {values.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.id && !!errors.id}
                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='First Name'
                      name='firstName'
                      value = {values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.firstName && !!errors.firstName}
                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='Last Name'
                      name='lastName'
                      value = {values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.lastName && !!errors.lastName}
                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='Email'
                      name='email'
                      value = {values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.email && !!errors.email}
                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='Tickets'
                      name='tickets'
                      value = {values.tickets}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.tickets && !!errors.tickets}
                    >
                    </TextField>

                    <TextField 
                      variant='filled'
                      label='password'
                      name='password'
                      value = {values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.password && !!errors.password}
                      helperText={!!touched.password && !!errors.password}
                    >
                    </TextField>
                    <SubmitButton>Create user</SubmitButton>
                  </Form>
                )
              }
              </Formik>
    </Container>
  )
}
