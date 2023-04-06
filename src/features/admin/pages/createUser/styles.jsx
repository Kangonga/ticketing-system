import { styled } from "@mui/material";

export const ComponentContainer = styled('div')(({ theme })=>({
    flex:2,
    display:'flex',
    flexDirection:'column',
    padding:'0 1rem',
    '& form' :{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
        width:'80%',
        margin:'auto',
        paddingTop:'1rem',
        height:'max-content',
        paddingBottom:'2rem',
        '& button':{
            width:'max-content',
            padding:'.5rem 2rem',
            backgroundColor:'coral',
            borderRadius:'20px',
            margin:'auto',
            cursor:'pointer',
            border:'none'
        }
    }
}))