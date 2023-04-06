import { Avatar, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '../../styles/styles'
import  { ComponentContainer, Cont } from './styles'

export default function Profile() {
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
            <Topbar />
                <Typography textAlign='center' fontSize='1.2rem' margin='1rem' color='gray'>
                    My Profile
                    </Typography>
                  <form >
                    <TextField
                      type='text'
                      variant='filled'
                      label='id'
                      name='id'
                      disabled
                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='First Name'
                      name='firstName'
                      value = {'admin'}

                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='Last Name'
                      name='lastName'
                      value = {'one'}
                    
                    >
                    </TextField>

                    <TextField
                      variant='filled'
                      label='Email'
                      name='email'
                      value = {'admin@mail.com'}
                    
                    >
                    </TextField>

                    <TextField 
                      variant='filled'
                      label='Image Source'
                      name='imgUrl'
                      value = {''}
                    >
                    </TextField>

                    <TextField 
                      variant='filled'
                      label='password'
                      name='password'
                      value = {'********'}
                    >
                    </TextField>
                    <TextField 
                      variant='filled'
                      label='status'
                      name='status'
                      value = {'offline'}
                    >
                    </TextField>

                    <Button type='submit' onClick={()=>console.log('sub')}>Update details</Button>
                  </form>
        </ComponentContainer>
    </Container>
  )
}