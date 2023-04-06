import { styled } from "@mui/material";


export const ComponentContainer = styled('div')(({ theme }) => ({
    flex:2,
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'#fcfcfc',
    height:'max-content',
    padding:'0 1rem'
}))
export const Widgets = styled('div')(({ theme })=>({
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(15rem,1fr))',
    gap:'1rem',
    padding:'1rem 0'
}))

export const Charts = styled('div')(({ theme })=>({
    display: 'flex',
    justifyContent:'space-between',
    padding:'1rem',
    flexWrap:'wrap',
    gap:'1rem',
    marginTop:'2rem',
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
    },
}))