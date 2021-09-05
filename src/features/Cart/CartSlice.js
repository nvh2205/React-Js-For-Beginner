import { createSlice } from "@reduxjs/toolkit";

const initialCart = localStorage.getItem('productInCart')?JSON.parse(localStorage.getItem('productInCart')): [];


const cart = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        removeProduct: (state, action) => {
            const removeProductId = action.payload;
            localStorage.setItem('productInCart', JSON.stringify(state));
            return state.filter(item => item.id !== removeProductId);
        },
        dscQuantityProduct: (state, action) => {
            const indexProductId = state.findIndex(item => item.id === action.payload);
            return void state[indexProductId].quantity--
        },
        iscQuantityProduct: (state, action) => {
            const indexProductId = state.findIndex(item => item.id === action.payload);
            return void state[indexProductId].quantity++
        },
        updateQuantityProduct: (state, action) => {
            const indexProductId = state.findIndex(item => item.id === action.payload.id);
            state[indexProductId].quantity = action.payload.quantity;
        },

        addProduct: (state, action) => {
            const indexProductId = state.findIndex(item => item.id === action.payload.id);
            if (indexProductId === -1) {
                state.push(action.payload)
            }
            else {
                state[indexProductId].quantity++;
            }
            localStorage.setItem('productInCart', JSON.stringify(state));

            return state;
        },
        removeAllProduct:(state,action) => {
            state=[];
            return state;
        }

    }
});

const { reducer, actions } = cart;
export const { removeProduct, dscQuantityProduct, iscQuantityProduct, updateQuantityProduct,addProduct,removeAllProduct } = actions;
export default reducer;