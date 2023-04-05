import { Typography } from '@mui/material'
import { images } from '../../../../assets'
import AreaChart from '../../../../shared/components/charts/areaChart/AreaChart'
import { ChartContainer, DataTableContainer, TopContainer, UserContainer, ComponentContainer } from './styles'
import { Container } from '../../../../shared/styles/styles'
import  Sidebar  from '../../../../shared/components/sidebar/Sidebar'
import Topbar from '../../../../shared/components/topbar/Topbar'

export default function SingleView() {
  return (
    <Container>
      <Sidebar></Sidebar>
    <ComponentContainer>
    <Topbar></Topbar>
      <Typography>Developer data</Typography>
      <TopContainer>
        <UserContainer>
          <figure>
            <img src={images.user} alt="" />
          </figure>

          <section className="userDetails">
            <Typography>Jane Doe</Typography>
            <Typography>Email: test@mail.com</Typography>
            <Typography>role: developer</Typography>
            <Typography>Tickets closed: 12</Typography>
            <Typography>Tickets reopened: 2</Typography>
          </section>
        </UserContainer>
        <ChartContainer>
          <Typography>Tickets closing graph</Typography>
          <AreaChart></AreaChart>
        </ChartContainer>
      </TopContainer>

      <DataTableContainer></DataTableContainer>
      </ComponentContainer>
    </Container>
  )
}
