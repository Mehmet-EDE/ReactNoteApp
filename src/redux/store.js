import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from "./notes/noteSlice";

export const store=configureStore({
    reducer:{
        notes:noteSliceReducer
    }
})