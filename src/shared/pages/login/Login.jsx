import * as yup from 'yup'
import { Container, SmallText } from './styles'
import { Formik } from 'formik'
import { useState } from 'react'
import {  TextField , InputAdornment, IconButton, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function AdminLogin() {
  const [showPassword,setShowPassword] = useState(false)

  const initialData = {
    email:"",
    password:""
  }
  const schema = yup.object().shape({
    email: yup.string().email().required('please input your email'),
    password: yup.string().required('please input your password')
  })
  const handleSubmit = (data)=>{
    console.log(data)
  }
  return (
    <Container>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialData}
        validationSchema={schema}
      >
        {
        ({ values, errors, touched, handleChange, handleBlur, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
                <TextField 
                      variant='outlined'
                      label='Email'
                      name='email'
                      value = {values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.email && !!errors.email}
                      helperText={!!touched.email && errors.email}
                    >
                    </TextField>


                    <TextField 
                      variant='outlined'
                      label='Password'
                      name='password'
                      value = {values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.password && !!errors.password}
                      helperText={!!touched && errors.password}
                      type={showPassword?'text':'password'}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <IconButton onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword? <Visibility />: <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>,
                      }}
                    >
                    </TextField>
                    <button className='submit' type='submit'>Submit</button>
            </form>
        )}
      </Formik>
      <SmallText>
        <Typography variant='p' fontSize='.9rem'>Forgot Password? Request  a new password</Typography>
      </SmallText>
    </Container>
  )
}
