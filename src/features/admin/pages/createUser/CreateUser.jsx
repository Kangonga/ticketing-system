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
import { useState } from 'react'

export default function CreateUser({type}) {
  const date = new Date()
    const [initialValues, setInitialValues] = useState({
        id:type==='developer'?new IdGenerator(`dev${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression():new IdGenerator(`agent${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression(),
        firstName:'',
        lastName:'',
        tickets:'0',
        imgUrl:'',
        email:'',
        password:'12345',
        status:'',
        role:type
    })
    const userSchema = yup.object().shape({
        id: yup.string(),
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email:yup.string().email().required('Please enter a valid email'),
        tickets: yup.string().required('Default value should be present'),
        imgUrl:yup.string(),
        password:yup.string().required('A default value is required'),
        status:yup.string().required('default status is required'),
        role:yup.string()
    })
    const handleSubmit = (values)=>{
      if (type==='developer')postDeveloper(values)
      if (type==='agent')postAgents(values)
      setInitialValues({
        ...initialValues,
        id:type==='developer'?new IdGenerator(`dev${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression():new IdGenerator(`agent${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression(),
      })
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
              enableReinitialize
              onSubmit={(values,{resetForm})=>{handleSubmit(values);resetForm()}}
              initialValues={initialValues}
              validationSchema={userSchema}
              >
              {
                ({values, errors, touched, handleChange, handleSubmit, handleBlur})=>(
                  <form onSubmit={handleSubmit}>
                    {Object.keys(initialValues).map((data,index)=>(
                          <TextField
                            type='text'
                            variant='filled'
                            label={data}
                            name={data}
                            disabled={data==='id'|| data==='tickets' || data==='role'?true:false}
                            value = {values[data]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched[data] && !!errors[data]}
                          />
                        ))}
                      <Button type='submit'>Create {type} account</Button>

                      </form>
                      )}
              </Formik>
            </ComponentContainer>
    </Container>
  )
}
