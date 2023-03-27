import React from 'react'
import ClosedTicketsCard from '../closedTicketsCard/ClosedTicketsCard'
import TicketSourcesChart from '../ticketSourcesChart/TicketSourcesChart'
import Widget from '../widgets/widget'
import { Charts,  Container, Widgets } from './styles'

export default function AdminDashboard() {
  return (
    <Container>
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
    </Container>
  )
}
