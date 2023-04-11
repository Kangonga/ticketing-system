import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    userInfo: {
        uid:'',
        name:'',
        email:'',
        password:'',
        role:'',
        imgUrl:'',
        onlineStatus:true,
        theme:'light',
        ticketData:{
            openedTickets:0,
            closedTickets:0,
        },
    },
    userToken: null,
    error: null,
    isLoggedIn:false
}

export const fetchUser = createAsyncThunk(
    'auth/login',
    async ()=>{
        const response = await axios
            .get('http://localhost:5000/admin');
        return response.data[0];
    }
)
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:()=>initialState,
    },
    extraReducers:builder=>{
        builder.addCase(fetchUser.pending, state=>{
            state.loading=true
        })
        builder.addCase(fetchUser.fulfilled, (state,action)=>{
            state.loading = false
            state.userInfo = action.payload
            state.error = ''
            state.isLoggedIn = true
            // localStorage.setItem("user",JSON.stringify(state.isLoggedIn))
        })
        builder.addCase(fetchUser.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
// console.log(authSlice)
export default authSlice.reducer
export const authActions = authSlice.actions
