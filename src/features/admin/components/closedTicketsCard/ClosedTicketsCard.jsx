import { KeyboardArrowDown, KeyboardArrowUp, MoreVertOutlined } from '@mui/icons-material'
import { IconButton, Typography, Box } from '@mui/material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { Container } from './styles'

export default function ClosedTicketsCard() {
  return (
    <Container>
        <section className="cardHeader">
          <Typography color='gray' fontSize='1.1rem'>Total Closed Tickets</Typography>
          <IconButton>
          <MoreVertOutlined></MoreVertOutlined>
          </IconButton>
        </section>

        <section className="cardBody">
          <CircularProgressbar value={50} text='50%' strokeWidth={2} className='progressBar' ></CircularProgressbar>
        </section>

        <section className="cardFooter">
          <Typography textAlign='center' fontSize='1.1rem' color='gray'>Today ticket statistics</Typography>

          <section className='details'>
            <section>
              <Typography color='#1E7DC6'>Closed</Typography>
              <Box display='flex' sx={{color:'green'}}>
                <Typography>50</Typography>
                <KeyboardArrowUp  />
              </Box>
            </section>

            <section>
              <Typography color='#1E7DC6'>Opened</Typography>
              <Box display='flex' sx={{color:'green'}} >
                <Typography>60</Typography>
                <KeyboardArrowDown />
              </Box>
            </section>

            <section>
              <Typography color='#1E7DC6'>Backlog</Typography>
              <Box display='flex' sx={{color:'red'}}>
                <Typography>5</Typography>
                <KeyboardArrowDown />
              </Box>
            </section>
          </section>
        </section>
    </Container>
  )
}
