import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DeveloperDashboard from '../features/developers/pages/dashboard/DeveloperDashboard'
import TicketsDataTable from '../features/tickets/datagrid/DataGrid'
import TicketChat from '../shared/pages/ticketChat/TicketChat'
import Profile from '../shared/pages/profilePage/Profile'

export default function RequireDeveloperAuth() {
    const navigate = useNavigate()
    const userLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    const userRole = useSelector((state)=>state.auth.userInfo.role)
    useEffect(()=>{
        if(!userLoggedIn || userRole!=='developer')navigate('/')
        console.log(userLoggedIn, userRole)
    },[])
  return (
    <Routes>
        <Route index element={<DeveloperDashboard />} />
        <Route path="tickets">
            <Route index element={<TicketsDataTable/>} />
            <Route path=":ticketId" element={<TicketChat />} />
        </Route>
        <Route path="profile" element={<Profile user={'developer'}/>} />
    </Routes>
    )
}
