import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const product = action.payload
            const existingProduct = state.cartItems.findIndex(data => data._id === product._id);

            if(existingProduct < 0){
                state.cartItems.push({...product, count: 1})                
            }else{
                state.cartItems[existingProduct].count += 1;               
            }


        },
        removeFromCart: (state, action) => {
            const productId = action.payload
            const existingProduct = state.cartItems.findIndex(data => data._id === productId)
            const count = state.cartItems[existingProduct].count
            if(count > 1){
                state.cartItems[existingProduct].count -= 1
            }else{
                state.cartItems = state.cartItems.filter(data => data._id !== productId)
            }
        },
        increaseCartProduct: (state, action) => {
            const productId = action.payload
            const existingProduct = state.cartItems.findIndex(data => data._id === productId)
            state.cartItems[existingProduct].count += 1
        },
        decreaseCartProduct: (state, action) => {
            const productId = action.payload
            const existingProduct = state.cartItems.findIndex(data => data._id === productId)
            state.cartItems[existingProduct].count -= 1
        },
        
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer