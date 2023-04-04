import { Typography } from '@mui/material'
import { agentColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {  useNavigate } from 'react-router-dom';
import { Actions, Container } from './styles';
import { useQuery } from '@tanstack/react-query';
import { fetchAgents } from '../../../data/fetchData';


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
    </Container>
  );
}