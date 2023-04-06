import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalData:{
        uid:'',
        name:'',
        email:'',
        password:'',
        role:'',
        imgUrl:'',
        onlineStatus:true
    },
    ticketData:{
        openedTickets:0,
        closedTickets:0,
    },
    isLoading:true,
    theme:''

}
const userSlice = createSlice({
    name:'admin',
    initialState
})
console.log(userSlice)
export default userSlice.reducer