import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, useNavigate } from 'react-router-dom'

export default function RequireAgentAuth() {
    const navigate = useNavigate()
    const userLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    const userRole = useSelector((state)=>state.auth.userInfo.role)

    useEffect(()=>{
        if(!userLoggedIn || userRole!=='agent')navigate('/')
    },[])
  return (
    <Route path="/agent">
        {/* <Route index element={<List />} />
        <Route path="login" element={<Login user={'agent'}/>} />
        <Route path=":agentId" element={<ListItem />} />
        <Route path="new" element={<NewItem />} />
        <Route path="me" element={<NewItem />} />
        <Route path="login" element={<Login />} /> */}
    </Route>
   )
}
