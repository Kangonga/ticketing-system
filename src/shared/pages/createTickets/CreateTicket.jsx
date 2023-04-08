import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '../../styles/styles'
import { ComponentContainer, TicketContainer } from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { IdGenerator } from 'custom-random-id'
import { postTickets } from '../../../data/postData'
import { useState } from 'react'

export default function CreateTicket({ user }) {
    const date = new Date()
    const [initialValues, setInitialValues] = useState({
        id: new IdGenerator(`ticket${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression(),
        title:'',
        description:'',
        agent:'',
        developer:'',
        source:'',
        priority:'',
        status:'',
        createdAt:`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}/${date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`,
        closedAt:'',
        messages:[]
    })
    const schema = yup.object().shape({
        id: yup.string(),
        title: yup.string().required('First name is required'),
        description: yup.string().required('Last name is required'),
        agent:yup.string().required('Please enter a valid email'),
        developer: yup.string().required('Default value should be present'),
        source:yup.string(),
        priority:yup.string().required('A default value is required'),
        status:yup.string().required('default status is required'),
        createdAt:yup.string().required(),
        closedAt:yup.string().required(),
        messages:yup.array()
    })
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
            <Topbar />
            <Typography fontSize='1.3rem' color='gray' textAlign='center' margin='1rem'>
                Create a Ticket
            </Typography>
            <TicketContainer>
                <Formik
                    enableReinitialize
                    onSubmit={(values, { resetForm,setSubmitting,setFieldValue })=>{
                        postTickets(values)
                        setInitialValues({
                            ...initialValues,
                            id: new IdGenerator(`ticket${date.getFullYear()}{{ string_2 }}{{ number_2 }}`).getFinalExpression(),
                            createdAt: `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}/${date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`
                        })
                        resetForm(initialValues)
                    }}
                    initialValues={initialValues}
                    validationSchema={schema}
                >
                    {
                        ({values, errors, touched, handleChange, handleBlur, handleSubmit})=>(
                            <form onSubmit={handleSubmit}>
                                {Object.keys(initialValues).map((data,index)=>{
                                    return <TextField
                                    key={index}
                                    type='text'
                                    variant='filled'
                                    label={data}
                                    name={data}
                                    disabled={data==='messages'||data==='id'?true:false}
                                    value = {values[data]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!!touched[data] && !!errors[data]}
                                    >
                                </TextField> 
                                })}
                                <Button type='submit' sx={{width:'max-content', padding:'.5rem 1rem', margin:'auto', color:'black', backgroundColor:'coral'}}>
                                    Create ticket
                                </Button>
                            </form>
                        )
                    }
                </Formik>
            </TicketContainer>
        </ComponentContainer>
    </Container>
)
}
