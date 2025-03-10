import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './Reducer/filterSlice'
export const store = configureStore({
    reducer: {
        filter: filterReducer
    }
})