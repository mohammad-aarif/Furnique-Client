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

        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer