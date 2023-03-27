import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=>({
    display:'flex',
    justifyContent:'space-between',
    borderBottom:'1px solid lightgray',
    padding: '.75rem'
})
)

export const SearchBox = styled('div')(({ theme })=>({
    display:'flex',
    borderRadius: '3px',
    backgroundColor: 'rgba(233,234,236,0.5)',
})
)

export const TopBarIcons = styled('div')(({ theme })=>({
    display:'flex',
    [theme.breakpoints.down('sm')]: {
        display:'none'
    }
})
)