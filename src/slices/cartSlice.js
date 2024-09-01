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
        addToCart(state, action) {
            const productExist = state.entities[action.payload.id];

            if (productExist) {
                state.entities[action.payload.id].cartQty += 1;

                toast.info("تعداد افزایش یافت", { position: "bottom-right" });
            } else {
                cartAdapter.addOne(state, action.payload);

                toast.success("محصول به سبد خرید اضافه شد", {
                    position: "bottom-right",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.entities));
        }
    },
});

export const { selectAll } = cartAdapter.getSelectors((state) => state.cart);

export const {
    populateCart,
    addToCart,

} = cartSlice.actions;

export default cartSlice.reducer;
