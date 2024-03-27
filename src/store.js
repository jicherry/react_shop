import { configureStore, createSlice } from "@reduxjs/toolkit";



let cart = createSlice({
    name : 'cart',
    initialState : [
        { id: 0, name : '선글라스', count : 2 },
        { id : 2, name : '안경', count : 1 }
    ],
    reducers : {
    addCount(state , action){
        state[action.payload].count++
        }
    }
})


export let { addCount } = cart.actions

export default configureStore({
    reducer: {
        cart : cart.reducer
    }
})