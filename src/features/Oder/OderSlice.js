import { createSlice } from "@reduxjs/toolkit";

const initialOder = [];

const oder = createSlice({
    name: 'oder',
    initialState: initialOder,
    reducers: {
        pushProductInCart: (state, action) => {
            state.push(action.payload);
        },
        removeOrder: (state, action) => {
            state=[];
            return state;
        }
    }
})

const { reducer, actions } = oder;
export const { pushProductInCart,removeOrder } = actions;
export default reducer