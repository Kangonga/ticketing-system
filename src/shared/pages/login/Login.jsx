import * as yup from 'yup'
import { Container, SmallText } from './styles'
import { Formik } from 'formik'
import { useContext, useState } from 'react'
import {  TextField , InputAdornment, IconButton, Typography, Button } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'

export default function AdminLogin() {
  const [showPassword,setShowPassword] = useState(false)
  const {user,setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState({
    email:"",
    password:""
  })
  const schema = yup.object().shape({
    email: yup.string().email().required('please input your email'),
    password: yup.string().required('please input your password')
  })
  const handleSubmit = (data)=>{
    const updated = {...user, name:'admin', role:'admin'}
    localStorage.setItem("user",JSON.stringify(updated)) 
    navigate('/admin')
  }
  return (
    <Container>
      <Formik
         validationSchema={schema}
        onSubmit={(values, {resetForm})=>{handleSubmit(values);resetForm()}}
        initialValues={initialData}
      >
        {
        ({ errors, touched, handleBlur, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
                <TextField 
                      variant='outlined'
                      label='Email'
                      name='email'
                      value = {initialData.email}
                      onChange={(e)=>setInitialData({...initialData, email:`${e.target.value}`})}
                      onBlur={handleBlur}
                      error={!!touched.email && !!errors.email}
                      helperText={!!touched.email && errors.email}
                    >
                    </TextField>


                    <TextField 
                      variant='outlined'
                      label='Password'
                      name='password'
                      value = {initialData.password}
                      onChange={(e)=>setInitialData({...initialData, password:`${e.target.value}`})}
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
                    <Button sx={{ width:'max-content', padding:'0.5rem 1rem',backgroundColor:'coral',margin:'auto'}} type='submit'>Submit</Button>
            </form>
        )}
      </Formik>
      <SmallText>
        <Typography variant='p' fontSize='.9rem'>Forgot Password? Request  a new password</Typography>
      </SmallText>
    </Container>
  )
}
