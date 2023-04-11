import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, useNavigate } from 'react-router-dom'

export default function RequireDeveloperAuth() {
    const navigate = useNavigate()
    const userLoggedIn = useSelector(state=>state.auth.userLoggedIn)
    useEffect(()=>{
        if(!userLoggedIn)navigate('/')
    },[])
  return (
    <Route path="/dev">
        {/* <Route index element={<List />} />
        <Route path="login" element={<Login user={'developer'}/>} />
        <Route path=":devId" element={<ListItem />} />
        <Route path="new" element={<NewItem />} />
        <Route path="me" element={<NewItem />} />
        <Route path="login" element={<Login />} /> */}
    </Route>
    )
}
