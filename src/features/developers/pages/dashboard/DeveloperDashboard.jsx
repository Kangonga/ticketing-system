import React from 'react'
import { Container } from '../../../../shared/styles/styles'
import Sidebar from '../../../../shared/components/sidebar/Sidebar'
import { ComponentContainer } from './styles'
import { Widgets } from '../../../admin/pages/adminDashboard/styles'
import Widget from '../../../admin/components/widgets/widget'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import Topbar from '../../../../shared/components/topbar/Topbar'

export default function DeveloperDashboard() {
    const user = useSelector((state)=>state.auth.userInfo)
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
            <Topbar />
            <Typography>Hello, {user?.firstName} {user?.lastName}</Typography>
            <Widgets>
                <Widget type='devOpenTickets' />
                <Widget type='devClosedTickets' />
                <Widget type='devTotalOpenTickets' />
            </Widgets>
        </ComponentContainer>
    </Container>
)
}
