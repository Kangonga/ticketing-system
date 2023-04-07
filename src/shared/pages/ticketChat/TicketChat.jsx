import { Box, Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { IdGenerator } from 'custom-random-id'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  patchTicket } from '../../../data/patchData'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '../../styles/styles'
import { ChatContainer, ChatIntro, ChatMessages, ComponentContainer, CreateMessageBox, MessageCard } from './styles'
import { fetchTickets } from '../../../data/fetchData'

export default function TicketChat() {
const date = new Date()
const params = useParams()
const ticketId = params.ticketId
const [isTicketUpdated, setIsTicketUpdated] = useState(false)
const [message, setMessage] = useState({
    senderId:'admin',
    senderName:'admin',
    data:'',
    time:''
})
function handleClose(){

}
const {data} = useQuery(["fetchtickets",isTicketUpdated], fetchTickets, {networkMode:'offlineFirst'})
const ticket = data?.filter(ticket=>ticket.id===ticketId)[0]
function handleSubmit(){
    const updated = {...ticket, messages:[...ticket.messages,message]}
    patchTicket(updated, ticketId).then(setIsTicketUpdated(!isTicketUpdated))
    setMessage({
        senderId:'admin',
        senderName:'admin',
        data:'',
        time:''
    })
}

  return (
    <Container>
        <Sidebar></Sidebar>
        <ComponentContainer>
            <Topbar />
            <ChatContainer>
            <Typography>Title: {ticket?.title}</Typography>
                <ChatIntro>
                    <Typography>Ticket id: {ticket?.id}</Typography>
                    <Button onClick={handleClose} sx={{backgroundColor:'coral', width:'max-content'}}>
                        Close ticket
                    </Button>
                </ChatIntro>
                <div><b>Description:</b> <MessageCard>
                            {ticket?.description}
                        </MessageCard></div>
                        <h4>Ticket chat messages</h4>
                <ChatMessages>   
                    {ticket?.messages?.map((message,index)=>{
                        return <MessageCard key={index}>
                            {message.data}
                            <br />
                            <Box display='flex' gap='1rem' fontSize='.8rem' color='gray'>
                                <span>sent by:{message.senderName}</span>
                                <span>at: {message?.time?.split(':')[0]}:{message?.time?.split(':')[1]} hours</span>
                            </Box>
                        </MessageCard>
                    })}
                </ChatMessages>
                <Typography>Create new message</Typography>
                <CreateMessageBox placeholder='TYPE TICKET RELATED MESSAGE HERE' value={message.data} onChange={(e)=>{setMessage({
                    ...message,
                    data:e.target.value,
                    time:`${date.getHours()}:${date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes()}`
                })}}> 
                </CreateMessageBox>
                <Button onClick={handleSubmit}sx={{bgcolor:'coral', width:'max-content', padding:'.5rem 1rem'}}>Submit</Button>
            </ChatContainer>
        </ComponentContainer>
    </Container>
  )
}
