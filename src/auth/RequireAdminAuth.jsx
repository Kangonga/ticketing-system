import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate,Route, Routes, useNavigate } from 'react-router-dom'

import AdminDashboard from '../features/admin/pages/adminDashboard/AdminDashboard'
import CreateUser from '../features/admin/pages/createUser/CreateUser'
import SingleView from '../features/admin/pages/userSingleView/SingleView'
import DevelopersDataTable from "../features/developers/datagrid/DataGrid";
import AgentDataTable from '../features/agents/datagrid/DataGrid'
import TicketsDataTable from '../features/tickets/datagrid/DataGrid'
import CreateTicket from '../shared/pages/createTickets/CreateTicket'
import TicketChat from '../shared/pages/ticketChat/TicketChat'
import Profile from '../shared/pages/profilePage/Profile'
import Login from "../shared/pages/login/Login"




export default function RequireAdminAuth({children}) {
  const navigate = useNavigate()
const {user, setUser} = useContext(UserContext)
const storeData = localStorage.getItem("user")

const uData = JSON.parse(storeData)

useEffect(()=>{
   if(uData && uData.role==='admin') setUser({...user, name:uData.name, role:uData.role});
   else navigate('/admin/login')
},[])
  return (
    <>
      <Routes>
        <Route index element={<AdminDashboard />}/>
        <Route path="profile" element={<Profile user={'admin'}/>} />
        <Route path="devs">
            <Route index element={<DevelopersDataTable />} />
            <Route path=":devId" element={<SingleView />} />
            <Route path="new" element={<CreateUser type={'developer'} />} />
        </Route>
        <Route path="tickets">
            <Route index element={<TicketsDataTable/>} />
            <Route path=":ticketId" element={<TicketChat />} />
            <Route path="new" element={<CreateTicket />} />
        </Route>
        <Route path="agents">
            <Route index element={<AgentDataTable data={'agents'}/>} />
            <Route path=":agentId" element={<SingleView />} />
            <Route path="new" element={<CreateUser type={'agent'}/>} />
        </Route>
        </Routes>
    </>
  )
}
