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
const [isTicketUpdated, setIsTicketUpdated] = useState(false)
const [message, setMessage] = useState({
    senderId:'admin',
    senderName:'admin',
    data:''
})
const {data} = useQuery(["fetchtickets",isTicketUpdated], fetchTickets, {networkMode:'offlineFirst'})
const ticket = data?.filter(ticket=>ticket.id===ticketId)[0]
function handleSubmit(){
    const updated = {...ticket, messages:[...ticket.messages,message]}
    console.log(updated)
    postTicket(updated, ticketId).then(setIsTicketUpdated(!isTicketUpdated))
    setMessage({
        senderId:'admin',
        senderName:'admin',
        data:''
    })
}

  return (
    <Container>
        <Sidebar></Sidebar>
        <ComponentContainer>
            <Topbar />
            <ChatContainer>
                <h3>Ticket id: {ticket?.id}</h3>
                <h3>Title: {ticket?.title}</h3>
                <div><b>Description:</b> <MessageCard>
                        {ticket?.description}
                    </MessageCard></div>
                <Chats>
                    <h4>Ticket chat messages</h4>
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
