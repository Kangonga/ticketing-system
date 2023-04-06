import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { IdGenerator } from 'custom-random-id'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTickets } from '../../../data/fetchData'
import {  postTicket } from '../../../data/postData'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '../../styles/styles'
import { ChatContainer, Chats, ComponentContainer, CreateMessageBox, MessageCard } from './styles'

export default function TicketChat() {
const params = useParams()
const ticketId = params.ticketId
const [updateTicket, setUpdateTicket] = useState([])
const [message, setMessage] = useState({
    senderId:'admin',
    senderName:'admin',
    data:''
})
const [ticket, setTicket] = useState([])
function handleSubmit(){
    setUpdateTicket({
        ...ticket[0],
        messages: [...ticket[0].messages, message]
    })
    fetch(`http://localhost:5000/tickets/${ticketId}`, {
        method:'PUT',
        'headers':{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(updateTicket)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}
useEffect(() => {
  const fetchTickets = async()=>{
    const res = await fetch('http://localhost:5000/tickets')
    const data = await res.json()
    setTicket(data.filter(ticket=>ticket.id===ticketId))
    setUpdateTicket(data.filter(ticket=>ticket.id===ticketId))
  }
  fetchTickets()
}, [ticketId])

  return (
    <Container>
        {
            console.log('updated ticket',updateTicket) 
        }
        {
            console.log('id ',ticketId) 
        }
        <Sidebar></Sidebar>
        <ComponentContainer>
            <Topbar />
            <ChatContainer>
                <h3>Ticket id: {ticket[0]?.id}</h3>
                <h3>Title: {ticket[0]?.title}</h3>
                <Chats>
                    {ticket?.messages?.map((message,index)=>{
                        return <MessageCard key={index}>
                            {message.data}
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
