import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=>({
    width:'100vw',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    '& form':{
        display:'flex',
        flexDirection:'column',
        // width:'40%',
        // margin:'auto',
        borderRadius: ' 10px',
        boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
        padding:'1rem',
        gap:'1rem'
    },
    '& .submit':{
        width:'max-content',
        padding:'0.5rem 1rem',
        backgroundColor:'coral',
        borderRadius:'10px',
        margin:'auto',
        cursor:'pointer'
    }
}))

export const SmallText = styled('div')(({ theme })=>({
    // display:'flex',
    // flexDirection:'column',
    padding:'1rem',
    fontSize:'0.7rem',
    cursor:'pointer'
}))