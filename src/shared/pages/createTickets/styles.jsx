import { styled } from "@mui/material"

export const ComponentContainer = styled('div')(({ theme })=>({
    flex:2,
    display:'flex',
    flexDirection:'column',
}))

export const TicketContainer = styled('div')(({ theme })=>({
    '& form':{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
        width:'80%',
        margin:'auto',
        paddingBottom:'1rem'
    }
}))