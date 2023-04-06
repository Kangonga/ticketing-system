import { Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { icons } from './data'
import { Drawer, DrawerHeader } from './styles'
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar() {
  const navigate = useNavigate()
  let location = useLocation()
  location = location.pathname.split('/')[1]
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <Box value={[openDrawer,setOpenDrawer]} >
      <CssBaseline />
      <Drawer variant="permanent" open={openDrawer}>
          <DrawerHeader onClick={()=>setOpenDrawer(!openDrawer)}>
              {openDrawer && 
                <Typography
                  color="inherit"
                  aria-label="header text"
                  zIndex={2}
                >
                  Ticket master
                </Typography>
              }
              <IconButton>
                  <MenuIcon />
              </IconButton>
          </DrawerHeader>
          <Divider />
          
          {Object.keys(icons).map((iconGroup) => (
          <List key={iconGroup}>
            {icons[iconGroup].map((icon,index)=>(
              <ListItem disablePadding sx={{ display: 'block' }} key={index} onClick={()=>navigate(`${icon.route}`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openDrawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {icon.icon}
                </ListItemIcon>
                <ListItemText primary={icon.name} sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            ))}
            <Divider />

            {/* <IconButton onClick={()=>setMode(mode==='light'?'dark':'light')}>
                {mode==="dark"?
                <LightModeOutlined />:
                <DarkModeOutlined />
                }
              </IconButton> */}
        </List>
        ))
        }

      </Drawer>
    </Box>
  )
}
