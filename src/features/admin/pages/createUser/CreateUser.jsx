import React from 'react'
import { ComponentContainer } from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Button, TextField, Typography } from '@mui/material'
import { IdGenerator } from 'custom-random-id'
import { Container } from '../../../../shared/styles/styles'
import Sidebar from '../../../../shared/components/sidebar/Sidebar'
import Topbar from '../../../../shared/components/topbar/Topbar'
import { postAgents, postDeveloper } from '../../../../data/postData'

export default function CreateUser({type}) {
  const date = new Date()
    const initialValues = {
        id:type==='developer'?new IdGenerator(`dev${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression():new IdGenerator(`agent${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression(),
        firstName:'',
        lastName:'',
        tickets:'0',
        imgUrl:'',
        email:'',
        password:'12345',
        status:''
    }
    const userSchema = yup.object().shape({
        id: yup.string(),
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email:yup.string().email().required('Please enter a valid email'),
        tickets: yup.string().required('Default value should be present'),
        imgUrl:yup.string(),
        password:yup.string().required('A default value is required'),
        status:yup.string().required('default status is required')
    })
    const handleSubmit = (values)=>{
      if (type==='developer')postDeveloper(values)
      if (type==='agent')postAgents(values)
    }
  return (
    <Container>
      <Sidebar />
      <ComponentContainer>
        <Topbar />
        <Typography textAlign='center' fontSize='1.2rem' margin='1rem' color='gray'>
          Create a new {type==='developer'?'Developer':'Agent'} account
        </Typography>
        <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
              >
              {
                ({values, errors, touched, handleChange, handleSubmit, handleBlur})=>(
                  <form onSubmit={handleSubmit}>
                    <TextField
                      type='text'
                      variant='filled'
                      label='id'
                      name='id'
                      disabled
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
                      label='Image Source'
                      name='imgUrl'
                      value = {values.imgUrl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.imgUrl && !!errors.imgUrl}
                      helperText={!!touched.imgUrl && errors.imgUrl}
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
                      helperText={!!touched.password && errors.password}
                    >
                    </TextField>
                    <TextField 
                      variant='filled'
                      label='status'
                      name='status'
                      value = {values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.status && !!errors.status}
                      helperText={!!touched.status && errors.status}
                    >
                    </TextField>

                    <Button type='submit' onClick={()=>console.log('sub')}>Create user</Button>
                  </form>
                )
              }
              </Formik>
            </ComponentContainer>
    </Container>
  )
}
