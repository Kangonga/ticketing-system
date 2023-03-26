import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, PersonOutlined, Search, SettingsOutlined } from '@mui/icons-material'
import { Box, IconButton, InputBase } from '@mui/material'
import React, { useState } from 'react'
import { Container } from './styles'

export default function Topbar() {
  const [mode,setMode] = useState('light')
  return (
    <Container>
            <Box display="flex"  borderRadius="3px" sx={{backgroundColor:'rgb(233, 234, 236)'}}>
              <InputBase  size="small" placeholder="search..." sx={{ml:2,flex:1}}/>
              <IconButton type="button" sx={{ p:1}}>
                <Search />
              </IconButton>
          </Box>

          <Box display="flex">
              <IconButton>
                <NotificationsOutlined />
              </IconButton>

              <IconButton>
                  <SettingsOutlined />
              </IconButton>

              <IconButton>
                <PersonOutlined />
              </IconButton>

              <IconButton onClick={()=>setMode(mode==='light'?'dark':'light')}>
                {mode==="dark"?
                <LightModeOutlined />:
                <DarkModeOutlined />
                }
              </IconButton>
          </Box>
    </Container>
  )
}
