import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DeveloperDashboard from '../features/developers/pages/dashboard/DeveloperDashboard'

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
        {/* <Route path="login" element={<Login user={'developer'}/>} />
        <Route path=":devId" element={<ListItem />} />
        <Route path="new" element={<NewItem />} />
        <Route path="me" element={<NewItem />} />
        <Route path="login" element={<Login />} /> */}
    </Routes>
    )
}
