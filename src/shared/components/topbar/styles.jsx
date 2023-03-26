import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=>({
    display:'flex',
    justifyContent:'space-between',
    borderBottom:'1px solid lightgray',
    padding: '.75rem'
})
)