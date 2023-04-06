import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=>({
    flex:'1',
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    justifyContent:'space-between',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: ' 20px',
    gap:'.75rem',
    minWidth:'20rem',

    '.cardHeader':{
        flex:'1',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:'20%'
    },
    '.cardBody':{
        flex:'2',
        textAlign:'center',
        'svg':{
            height:'100px'
        }
    },
    '.cardFooter':{
        flex:'1',
        '.details':{
            display:'flex',
            justifyContent:'space-between'
        }

    }
}))