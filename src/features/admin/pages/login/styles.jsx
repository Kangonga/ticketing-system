import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=>({
    position:'absolute',
    top:0,
    right:0,
    left:0,
    bottom:0,
    zIndex:20,
    width:'100vw',
    height:'100vh',
    backgroundColor:'coral'
}))

export const Form = styled('form')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    gap:'.5rem'
}))