import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {

    }
);



export default productsSlice.reducer;
