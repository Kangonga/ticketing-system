import * as yup from 'yup'
import { Container, SmallText } from './styles'
import { Formik } from 'formik'
import { useContext, useState } from 'react'
import { TextField , InputAdornment, IconButton, Typography, Button } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { fetchUser } from '../../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminLogin() {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState({
    email:"",
    password:""
  })
  const schema = yup.object().shape({
    email: yup.string().email().required('please input your email'),
    password: yup.string().required('please input your password')
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(fetchUser()).then(()=>navigate('/admin'))
  }
  return (
    <Container>
            <form onSubmit={handleSubmit}>
                <TextField 
                      variant='outlined'
                      label='Email'
                      name='email'
                      value = {initialData.email}
                      onChange={(e)=>setInitialData({...initialData, email:`${e.target.value}`})}
                    >
                    </TextField>


                    <TextField 
                      variant='outlined'
                      label='Password'
                      name='password'
                      value = {initialData.password}
                      onChange={(e)=>setInitialData({...initialData, password:`${e.target.value}`})}
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
      <SmallText>
        <Typography variant='p' fontSize='.9rem'>Forgot Password? Request  a new password</Typography>
      </SmallText>
    </Container>
  )
}
