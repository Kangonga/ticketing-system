import { styled } from "@mui/material";

export const ComponentContainer = styled('div')(({ theme })=>({
    flex:2,
    display:'flex',
    flexDirection:'column',
}))

export const ChatContainer = styled('div')(({ theme })=>({
    backgroundColor:'#fcfcfc',
    display:'flex',
    flexDirection:'column',
}))

export const ChatIntro = styled('div')(({ theme })=>({
    display:'flex',
    paddingRight:'1rem',
    justifyContent:'space-between',
    // gap:'2rem',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
    }
}))

export const ChatMessages = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    height:'50vh',
    overflow:'auto',
    gap:'1rem',
    padding:'1rem',
    marginBottom:'2rem',
    width:'90%',    
    '::-webkit-scrollbar': {
        width: '10px'
    },
    '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
    },
}))

export const MessageCard = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: '1rem',
    width:'50rem',
}))

export const CreateMessageBox = styled('textarea')(({ theme })=>({
    height:'28vh',
    width:'60rem',
    overflow:'auto',
    resize:'none',
}))