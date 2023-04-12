import { Margin } from "@mui/icons-material";
import { styled } from "@mui/material";

export const ComponentContainer = styled('div')(({ theme })=>({
    flex:2,
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'#fcfcfc',
    height:'max-content',
    padding:'0 1rem'
}))

export const ChartContainer = styled('div')(({ theme })=>({
    display:'flex',
    gap:'2rem',
    justifyContent:'space-around',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column'
    }
}))

export const AreaChartContainer = styled('div')(({ theme })=>({
    // height: '300px',
    minWidth:'25rem',
    // maxWidth:'30rem',
    // padding:'1rem'
    height: '280px',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: ' 20px',
    gap:'.75rem',
    // margin:'auto'
}))
export const ProgressBarContainer = styled('div')(({ theme })=>({
    height: '250px',
    minWidth:'25rem',
    maxWidth:'30rem',
    // margin:'auto'
}))