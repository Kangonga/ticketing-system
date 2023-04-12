import React from 'react'
import { Container } from '../../../../shared/styles/styles'
import Sidebar from '../../../../shared/components/sidebar/Sidebar'
import { AreaChartContainer, ChartContainer, ComponentContainer, ProgressBarContainer } from './styles'
import { Widgets } from '../../../admin/pages/adminDashboard/styles'
import Widget from '../../../admin/components/widgets/widget'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import Topbar from '../../../../shared/components/topbar/Topbar'
import AreaChart from '../../../../shared/components/charts/areaChart/AreaChart'
import ClosedTicketsCard from '../../../admin/components/closedTicketsCard/ClosedTicketsCard'

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
            <ChartContainer>
                <ProgressBarContainer>
                    <ClosedTicketsCard />
                </ProgressBarContainer>

                <AreaChartContainer>
                    Tickets closed over time
                    <AreaChart />
                </AreaChartContainer>



            </ChartContainer>
        </ComponentContainer>
    </Container>
)
}
