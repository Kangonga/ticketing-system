import { Typography } from '@mui/material'
import {  devColumns } from './data/columns';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Actions, ComponentContainer } from './styles';
import { useQuery } from '@tanstack/react-query';
import { fetchDevelopers } from '../../../../data/fetchData'
import { useState } from 'react';
import { Container } from '../../../../shared/styles/styles';
import Sidebar from '../../../../shared/components/sidebar/Sidebar';
import Topbar from '../../../../shared/components/topbar/Topbar';

export default function DataTable() {

  const navigate = useNavigate()
  const { isLoading, isError, data, error } = useQuery(["fetchDevs"],fetchDevelopers, {networkMode:'offlineFirst'})
  if(isLoading)return "Loading";
  if(isError) console.log(error)
  const handleView = ( e, params )=>{
    e.preventDefault()
    navigate(`./${params.row.id}`)
  }

  const handleDelete = (e)=>{
    e.preventDefault()
  }

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
      <Sidebar/>
      <ComponentContainer>
        <Topbar></Topbar>
      <Typography fontSize='1.2rem' color='gray' textAlign='center' paddingTop='1rem'> { 'devs' }</Typography>
        <DataGrid
            rows={data}
            pageSize={2}
            initialState={{
            pagination:{ paginationModel:{ pageSize:10 }}
            }}
            columns={devColumns.concat(actions)}
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