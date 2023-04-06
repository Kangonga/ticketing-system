import { styled } from "@mui/material";

export const ComponentContainer = styled('div')(({ theme })=>({
    flex:2,
    display:'flex',
    flexDirection:'column'
}))

export const ChatContainer = styled('div')(({ theme })=>({
    backgroundColor:'#fcfcfc',
    display:'flex',
    flexDirection:'column'
}))

export const ChatIntro = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column'
}))

export const Chats = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    height:'50vh',
    overflow:'auto'
}))

export const MessageCard = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: ' 20px',
    width:'60rem',
}))

export const CreateMessageBox = styled('textarea')(({ theme })=>({
    border:'2px solid black',
    height:'28vh',
    width:'60rem',
    overflow:'auto',
    resize:'none',
}))