import { styled } from "@mui/material";


export const ComponentContainer = styled('div')(({ theme }) => ({
    flex:2,
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'#fcfcfc',
    height:'max-content',
    padding:'0 1rem',
    height: '85vh',
    overflow:'auto',

    '.MuiDataGrid-root':{
        border:'none',
        padding:'1rem',
    },
    '.MuiDataGrid-toolbarContainer , .MuiButton-text':{
        color:'gray',
    },
    '.MuiDataGrid-footerContainer':{
        width:'50%',
        margin:'auto',
    }
}))

export const Actions = styled('div')(({ theme })=> ({
    display: 'flex',
    gap:'.5rem',

    '& div':{
        padding:'.5rem',
        borderRadius:'5px',
        cursor:'pointer',
    },

    '.view': {
        backgroundColor:'lightGreen',
    },
    '.delete': {
        backgroundColor:'coral',
    }
}))