import { styled } from "@mui/material"

export const Container = styled('div')(({ theme })=>({
    padding:'1rem',
    display:'flex',
    flexDirection:'column',
    gap:'1rem'
}))

export const TopContainer = styled('div')(({ theme })=>({
    display:'flex',
    gap:'1rem',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column'
    },
}))

export const UserContainer = styled('div')(({ theme })=>({
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    minHeight:'250px',
    [theme.breakpoints.down('md')]:{
        width:'75%',
        margin:'auto'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%'
    },
    'img':{
        borderRadius:'50%',
        height:'120px',
        width:'120px',
        objectFit:'cover'
    },
    '.userDetails':{
        display:'flex',
        flexDirection:'column',
        gap:'.5rem',
    }
}))

export const ChartContainer = styled('div')(({ theme })=>({
    flex:1,
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding:'.5rem',
    width:'100%',
    minHeight:'250px',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down('md')]:{
        width:'75%',
        margin:'auto'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%'
    },
}))

export const DataTableContainer = styled('div')(({ theme })=>({
}))