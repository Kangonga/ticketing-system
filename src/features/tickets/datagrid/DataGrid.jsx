import { Typography } from '@mui/material'
import { ticketColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {  useNavigate } from 'react-router-dom';
import { Actions, ComponentContainer } from './styles';
import { fetchTickets } from '../../../data/fetchData';
import { useQuery } from '@tanstack/react-query';

import { Container } from '../../../shared/styles/styles';
import Sidebar from '../../../shared/components/sidebar/Sidebar';
import Topbar from '../../../shared/components/topbar/Topbar';

export default function TicketsDataTable() {
  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useQuery(["fetchTickets"], fetchTickets, {networkMode:'offlineFirst'})
  if(isLoading)return "Loading";
  if(isError) console.log(error)
  const handleView = ( e, params )=>{
    e.preventDefault()
    navigate(`./${params.row.id}`)
  }

  let dataColumns = ticketColumns

  const actions = [{
    field:"action",
    headerName:"Action",
    width:200,
    renderCell: (params)=> {
      return (
        <Actions>
            <div onClick={e=>handleView(e,params)} className="view">View</div>
        </Actions>
      )
    }
  }]
  return (
    <Container>
      <Sidebar></Sidebar>
    <ComponentContainer>
      <Topbar></Topbar>
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
    </ComponentContainer>
    </Container>
  );
}