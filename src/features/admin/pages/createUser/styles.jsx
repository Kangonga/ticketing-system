import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=>({
    padding:'1rem',
}))

export const Form = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    gap:'1rem'
}))

export const SubmitButton = styled('div')(({ theme })=>({
    width:'max-content',
    padding:'.5rem 2rem',
    backgroundColor:'coral',
    borderRadius:'20px',
    margin:'auto',
    cursor:'pointer',
}))
