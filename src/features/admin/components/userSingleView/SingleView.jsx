import { Typography } from '@mui/material'
import { images } from '../../../../assets'
import AreaChart from '../../../../shared/components/charts/areaChart/AreaChart'
import { ChartContainer, Container, DataTableContainer, TopContainer, UserContainer } from './styles'

export default function SingleView() {
  return (
    <Container>
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
    </Container>
  )
}
