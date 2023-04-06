import { Typography } from '@mui/material'
import React from 'react'
import { data } from './data'
import PieChart from './PieChart'
import { Container, PieChartContainer } from './styles'

export default function TicketSourcesChart() {
  return (
    <Container>
      <Typography textAlign='center' fontSize='1.1rem' color='gray'>Ticket sources</Typography>
      <PieChartContainer>
        <PieChart data={ data }></PieChart>
      </PieChartContainer>
    </Container>
  )
}
