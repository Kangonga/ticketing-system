import { Button, Typography } from '@mui/material'
import { ticketColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {  useNavigate } from 'react-router-dom';
import { Actions, ComponentContainer } from './styles';
import { fetchTicket, fetchTickets } from '../../../data/fetchData';
import { useQuery } from '@tanstack/react-query';

import { Container } from '../../../shared/styles/styles';
import Sidebar from '../../../shared/components/sidebar/Sidebar';
import Topbar from '../../../shared/components/topbar/Topbar';
import { useSelector } from 'react-redux';
import { patchTicket } from '../../../data/patchData';
import { useState } from 'react';

export default function TicketsDataTable() {
  const navigate = useNavigate()
  const loggedInUser = useSelector((state)=>state.auth.userInfo)
  const [isTicketMutated, setIsTicketMutated] = useState(false)

  const { data, isLoading, isError, error } = useQuery(["fetchTickets", isTicketMutated], fetchTickets, {networkMode:'offlineFirst'})
  if(isLoading)return "Loading";
  if(isError) console.log(error)
  
  const handleView = ( e, params )=>{
    e.preventDefault()
    navigate(`./${params.row.id}`)
  }

  const handleAssign = async( e, params )=>{
    e.preventDefault()
    let ticket = await fetchTicket(params.row.id)
    let updatedTicket = await {...ticket, developer:loggedInUser}
    patchTicket(updatedTicket,params.row.id).then((res)=>console.log('response',res))
    setIsTicketMutated(!isTicketMutated)
  }

  const handleUnAssign = async( e, params )=>{
    e.preventDefault()
    let ticket = await fetchTicket(params.row.id)
    let updatedTicket = await {...ticket, developer:{}}
    patchTicket(updatedTicket,params.row.id).then((res)=>console.log('response',res))
    setIsTicketMutated(!isTicketMutated)
  }

  let dataColumns = ticketColumns

  const actions = [{
    field:"action",
    headerName:"Action",
    width:100,
    renderCell: (params)=> {
      return (
        <Actions>
            <div onClick={e=>handleView(e,params)} className="view">View</div>
        </Actions>
      )
    }
  },
  {
    field:"assigned",
    headerName:"",
    width:200,
    renderCell: (params)=> {
      return (
        <Actions>
            <div onClick={e=>handleAssign(e,params)} className="view"  style={{display:loggedInUser.role==='admin'|| loggedInUser.role==='developer'?"inline":"none"}}>
                {!params.row.developer.id?"Self assign":"assigned"}
            </div>

            <div onClick={e=>handleUnAssign(e,params)} className="view" style={{display:params.row.developer.id?"inline":"none"}}>
                {params.row.developer.id?"unassign":""}
            </div>
        </Actions>
      )
    }
},
]
  return (
    <Container>
      <Sidebar></Sidebar>
    <ComponentContainer>
      <Topbar />
        <Typography fontSize='1.2rem' color='gray' textAlign='center' paddingTop='1rem'> Tickets</Typography>
        <DataGrid
            rows={data}
            pageSize={2}
            initialState={{
            pagination:{paginationModel:{pageSize:10}}
            }}
            columns={dataColumns.concat(actions)}
            pageSizeOptions={[5,10,15]}
            checkboxSelection
            slots={{
            toolbar: GridToolbar,
            }}
        />
        <Button onClick={()=>navigate('new')}
         sx={{
          width:'max-content',color:'black', padding:'.5rem 1rem', margin:'auto', backgroundColor:'coral',
          display:loggedInUser.role==="admin"||loggedInUser.role==="agent"?"block":"none"
          }}>Create new ticket</Button>
    </ComponentContainer>
    </Container>
  );
}