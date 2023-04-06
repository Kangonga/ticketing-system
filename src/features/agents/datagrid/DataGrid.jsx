import { Button, Typography } from '@mui/material'
import { agentColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {  useNavigate } from 'react-router-dom';
import { Actions, ComponentContainer } from './styles';
import { useQuery } from '@tanstack/react-query';
import { fetchAgents } from '../../../data/fetchData';
import { Container } from '../../../shared/styles/styles'
import  Sidebar  from '../../../shared/components/sidebar/Sidebar'
import  Topbar  from '../../../shared/components/topbar/Topbar'


export default function AgentDataTable() {
  const navigate = useNavigate()
  const { isLoading, data } = useQuery(["fetchAgents"],fetchAgents, {networkMode:'offlineFirst'})
  if(isLoading)return "Loading...";
  const handleView = ( e, params )=>{
    e.preventDefault()
    navigate(`./${params.row.id}`)
  }

  const handleDelete = (e)=>{
    e.preventDefault()
    console.log(e.target.innerHTML)
  }
  let dataColumns = agentColumns
  const actions = [{
    field:"action",
    headerName:"Action",
    width:200,
    renderCell: (params)=> {
      return (
        <Actions>
            <div onClick={e=>handleView(e,params)} className="view">View</div>
            <div onClick={handleDelete} className="delete">Delete</div>
        </Actions>
      )
    }
  }]
  return (
    <Container>
      <Sidebar></Sidebar>
    <ComponentContainer>
      <Topbar></Topbar>
        <Typography fontSize='1.2rem' color='gray' textAlign='center' paddingTop='1rem'> Agents </Typography>
        {/* {isLoading?<h1>Loading</h1>:null} */}
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
        <Button onClick={()=>navigate('new')} sx={{width:'max-content',color:'black', padding:'.5rem 1rem', margin:'auto', backgroundColor:'coral'}}>Create new Agent account</Button>
    </ComponentContainer>
    </Container>
  );
}