import { Typography } from '@mui/material'
import { ticketRows } from './data/rows';
import { ticketColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useLocation, useNavigate } from 'react-router-dom';
import { Actions, Container } from './styles';


export default function TicketsDataTable() {
  const navigate = useNavigate()
  const path = useLocation().pathname.split('/')
  const location = path[path.length-1]

  const handleView = ( e, params )=>{
    e.preventDefault()
    navigate(`./${params.row.id}`)
  }

  let dataColumns = ticketColumns
  let dataRows = ticketRows

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
        {console.log(location)}
        <Typography fontSize='1.2rem' color='gray' textAlign='center' paddingTop='1rem'> { location }</Typography>
        <DataGrid
            rows={dataRows}
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