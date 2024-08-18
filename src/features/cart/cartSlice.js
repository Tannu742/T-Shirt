import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExists = state.cart.find(item => item.productId === action.payload.productId);
            if (!isExists) state.cart.push(action.payload);
        },
        deleteCart: (state, action) => {
            state.cart.splice(action.payload, 1);
        }
    }
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
