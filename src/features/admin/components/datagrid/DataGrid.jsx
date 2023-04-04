import { Typography } from '@mui/material'
import {  devColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Actions, Container } from './styles';
import { useEffect, useState } from 'react';


export default function DataTable({ data }) {
  const [rows, setrows] = useState([])
  const navigate = useNavigate()
  const tableUser = data

  const handleView = ( e, params )=>{
    e.preventDefault()
    navigate(`./${params.row.id}`)
  }

  const handleDelete = (e)=>{
    e.preventDefault()
  }
  let dataColumns = devColumns

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
  useEffect(()=>{
    const fets = async ()=>{
      const res = await fetch('http://localhost:5000/developers')
      const data = await res.json()
      setrows(data)
  }
  fets()
  },[])

  return (
    <Container>
      {console.log(rows[0])}
        <Typography fontSize='1.2rem' color='gray' textAlign='center' paddingTop='1rem'> { tableUser }</Typography>
        <DataGrid
            rows={rows}
            pageSize={2}
            initialState={{
            pagination:{ paginationModel:{ pageSize:10 }}
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