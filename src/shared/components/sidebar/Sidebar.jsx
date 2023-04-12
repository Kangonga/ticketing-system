import { Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { icons } from './data'
import { Drawer, DrawerHeader } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../features/auth/authSlice'
import { AnalyticsOutlined, BugReportOutlined, EngineeringOutlined, HomeOutlined, LiveHelpOutlined, LogoutOutlined, PersonOutlined, SupportAgentOutlined } from '@mui/icons-material'

export default function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let location = useLocation()
  const userRole = useSelector((state)=>state.auth.userInfo.role)
  location = location.pathname.split('/')[1]
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleLogout = ()=>{
    dispatch(authActions.logout())
    navigate('/',{replace:true});
  }
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

        <List >
            <ListItem disablePadding sx={{ display: 'block' }}
              onClick={()=>navigate(`/${userRole}`)}
            >
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
                    <HomeOutlined />
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List sx={{display:userRole!=='admin'?'none':'block'}}>
            <ListItem disablePadding sx={{ display: 'block' }}
               onClick={()=>navigate(`/${userRole}/devs`)} 
            >
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
                    <EngineeringOutlined />
                </ListItemIcon>
                <ListItemText primary='Developers' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}
               onClick={()=>navigate(`/${userRole}/agents`)} 
            >
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
                    <SupportAgentOutlined />
                </ListItemIcon>
                <ListItemText primary='Tickets' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

        </List>

        <List>
        <ListItem disablePadding sx={{ display: 'block' }}
          onClick={()=>navigate(`/${userRole}/tickets`)}
        >
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
                    <BugReportOutlined />
                </ListItemIcon>
                <ListItemText primary='Tickets' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>

          <Divider />

        <List sx={{display:userRole!=='admin'?'none':'block'}}>
            <ListItem disablePadding sx={{ display: 'block' }}
              onClick={()=>navigate(`/${userRole}/Statistics`)}
            >
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
                    <AnalyticsOutlined />
                </ListItemIcon>
                <ListItemText primary='Statistics' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}
              onClick={()=>navigate(`/${userRole}/faq`)}
            >
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
                    <LiveHelpOutlined />
                </ListItemIcon>
                <ListItemText primary='FAQs' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>

        <List>
            <ListItem disablePadding sx={{ display: 'block' }}
              onClick={()=>navigate(`/${userRole}/profile`)}
              >
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
                    <PersonOutlined />
                </ListItemIcon>
                <ListItemText primary='Profile' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
          
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}
              onClick={handleLogout}
            >
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
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary='Log Out' sx={{ opacity: openDrawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>


      </Drawer>
    </Box>
  )
}
