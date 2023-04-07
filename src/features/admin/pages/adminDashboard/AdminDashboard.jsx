import React from 'react'
import Sidebar from '../../../../shared/components/sidebar/Sidebar'
import { Container } from '../../../../shared/styles/styles'
import Topbar from '../../../../shared/components/topbar/Topbar'
import ClosedTicketsCard from '../../components/closedTicketsCard/ClosedTicketsCard'
import TicketSourcesChart from '../../components/ticketSourcesChart/TicketSourcesChart'
import Widget from '../../components/widgets/widget'
import { Charts,  ComponentContainer, Widgets } from './styles'

export default function AdminDashboard() {
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
        <Topbar />
        <Widgets>
            <Widget type='devs'></Widget>
            <Widget type='agents'></Widget>
            <Widget type='customers'></Widget>
            <Widget type='tickets'></Widget>
        </Widgets>

        <Charts>
          <ClosedTicketsCard></ClosedTicketsCard>
          <TicketSourcesChart></TicketSourcesChart>
        </Charts>
        </ComponentContainer>
        
    </Container>
  )
}
