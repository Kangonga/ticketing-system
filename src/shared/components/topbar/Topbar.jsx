import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, PersonOutlined, Search, SettingsOutlined } from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import React, { useState } from 'react'
import { Container, SearchBox, TopBarIcons } from './styles'

export default function Topbar() {
  const [mode,setMode] = useState('light')
  return (
    <Container>
          <SearchBox>
              <InputBase  size="small" placeholder="search..." sx={{ml:2,flex:1}}/>
              <IconButton type="button" >
                <Search />
              </IconButton>
          </SearchBox>

          <TopBarIcons>
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
          </TopBarIcons>
    </Container>
  )
}
