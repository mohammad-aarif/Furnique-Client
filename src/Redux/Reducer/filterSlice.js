import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        addToFilter: (state, action) => {
            if(state.categories.includes(action.payload)){
                state.categories = state.categories.filter(data => data !== action.payload)
            }else{
                state.categories.push(action.payload)
            }
        }
    }
}); 
export const {addToFilter} = filterSlice.actions;
export default filterSlice.reducer;