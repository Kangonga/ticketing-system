import Sidebar from '../../../../shared/components/sidebar/Sidebar'
import { Container } from '../../../../shared/styles/styles'
import Topbar from '../../../../shared/components/topbar/Topbar'
import ClosedTicketsCard from '../../components/closedTicketsCard/ClosedTicketsCard'
import TicketSourcesChart from '../../components/ticketSourcesChart/TicketSourcesChart'
import Widget from '../../components/widgets/widget'
import { Charts,  ComponentContainer, Widgets } from './styles'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export default function AdminDashboard() {
  const userState = useSelector((state)=>state.auth.userInfo)
  
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
        <Topbar />
        <Typography>Hello there, {userState?.firstName}</Typography>
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
