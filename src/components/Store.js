import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        bookNow(state,action){
            state.push(action.payload)

        },
        cancelSeat(state,action){
            state.splice(action.payload, 1)
        }
    }
})


const store = configureStore({
    reducer: cartSlice.reducer
})

export const {bookNow,cancelSeat}= cartSlice.actions

export default store 



