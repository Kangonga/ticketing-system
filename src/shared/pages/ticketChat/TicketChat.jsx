import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { IdGenerator } from 'custom-random-id'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  postTicket, postTickets } from '../../../data/postData'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '../../styles/styles'
import { ChatContainer, Chats, ComponentContainer, CreateMessageBox, MessageCard } from './styles'
import { fetchTickets } from '../../../data/fetchData'

export default function TicketChat() {
const params = useParams()
const ticketId = params.ticketId
const [updateTicket, setUpdateTicket] = useState([])
const [message, setMessage] = useState({
    senderId:'admin',
    senderName:'admin',
    data:''
})
const {data} = useQuery(["fetchtickets"], fetchTickets, {networkMode:'offlineFirst'})
const ticket = data?.filter(ticket=>ticket.id===ticketId)[0]
function handleSubmit(){
    setUpdateTicket({
        ...ticket[0],
        messages: [...ticket[0].messages, message]
    })
    postTicket(updateTicket[0], ticketId)
}

  return (
    <Container>
        <Sidebar></Sidebar>
        <ComponentContainer>
            <Topbar />
            <ChatContainer>
                <h3>Ticket id: {ticket?.id}</h3>
                <h3>Title: {ticket?.title}</h3>
                <Chats>
                    {console.log(ticket)}
                    {ticket?.messages?.map((message,index)=>{
                        return <MessageCard key={index}>
                            {message.data}
                            {console.log(message)}
                            <br />
                            sent by:{message.senderName}
                        </MessageCard>
                    })}
                </Chats>
                <CreateMessageBox placeholder='TYPE TICKET RELATED MESSAGE HERE' value={message.data} onChange={(e)=>setMessage({...message, data:e.target.value})}>
                </CreateMessageBox>
                <Button onClick={handleSubmit}sx={{bgcolor:'coral', width:'max-content', padding:'.5rem 1rem'}}>Submit</Button>
            </ChatContainer>
        </ComponentContainer>
    </Container>
  )
}
