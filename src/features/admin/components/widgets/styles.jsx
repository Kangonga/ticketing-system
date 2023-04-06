import { styled } from "@mui/material";

export const Container = styled('div')(({ theme }) =>({
    display: 'flex',
    flexDirection: 'column',
    gap:'.75rem',
    justifyContent: 'space-between',
    height: 'max-content',
    padding: '.5rem',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
}))

export const WidgetFooter = styled('div')(({ theme })=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    '& svg':{
        fontSize:'1.3rem'
    },
    '.link': {
        cursor:'pointer',
        borderBottom: '1px solid rgb(128, 125, 125)',
        '&:hover': {
            backgroundColor: 'rgb(233, 220, 248)'
        }

    }
}))