import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    //ids:[], entities:{} -> id -> bookID -> selectId
    cartTotalAmount: 0,
    cartTotalQty: 0,
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        populateCart(state, action) {
            if (localStorage.getItem("cartItems")) {
                cartAdapter.setAll(
                    state,
                    JSON.parse(localStorage.getItem("cartItems"))
                );
            }
        },
    },
});

export const { selectAll } = cartAdapter.getSelectors((state) => state.cart);

export const {
    populateCart,

} = cartSlice.actions;

export default cartSlice.reducer;
