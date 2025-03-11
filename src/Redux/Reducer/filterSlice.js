import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    sortBy : 'latest',
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
        },
        addSort: (state, action) =>{
            state.sortBy = action.payload
        }
    }
}); 
export const {addToFilter, addSort} = filterSlice.actions;
export default filterSlice.reducer;