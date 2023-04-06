// store is the entire state for the app.
//steps =>
//create store.js file
//import config store from redux
//call the config store with an object called reducer

//toolkit is analogous to context
//configure store function accepts a reducer porperty which is an object

//slice is a feature of the application
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
export const store = configureStore({
    reducer:{
        user: userReducer,
    },
})